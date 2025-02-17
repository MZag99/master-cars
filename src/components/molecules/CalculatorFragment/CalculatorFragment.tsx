'use client';

import type { DropdownInputProps, CheckboxInputProps, TextInputProps, InputValueProps, RelativeInputValueProps, RelativeSteppedProps } from '@/components/atoms/CalculatorInputs/CalculatorInputs';

import classNames from 'classnames';
import { useEffect, useMemo, useState } from 'react';

import { roundToDecimal } from '@/utils/roundToDecimal';
import { useLoadedCurrencies } from '@/store/useControlsStore';

import { DropdownInput, InputLabel, CheckboxInput, TextInput, InputCaption, InputValue } from '@/components/atoms/CalculatorInputs/CalculatorInputs';

import styles from './CalculatorFragment.module.scss';

export type CalculatorRowProps = {
    label: string,
    index: number,
    input: {
        type: 'text' | 'dropdown' | 'checkbox' | 'value' | 'no-choice' | 'relative' | 'relative-stepped' | 'hidden',
        props: TextInputProps | DropdownInputProps | CheckboxInputProps | InputValueProps | RelativeInputValueProps | RelativeSteppedProps;
    }
    caption?: string,
    variant?: 'accent' | 'outline',
    forceValue?: string,
    className?: string,
    noSetValue?: boolean,
    rowValues: number[],
    setRowValues: (values: number[] | ((prev: number[]) => number[])) => void,
};

export type CalculatorFragmentProps = {
    setValue: (value: number) => void,
    items: (Omit<CalculatorRowProps, 'index' | 'setRowValues' | 'rowValues'>)[];
    className?: string,
};


const CalculatorFragment = ({ items, setValue, className }: CalculatorFragmentProps): JSX.Element => {

    const [rowValues, setRowValues] = useState<number[]>(new Array(items.length).fill(0));

    const fragmentSum = useMemo(() =>
        rowValues.reduce((acc, curr, i) => {
            const increment = items[i].noSetValue ? 0 : curr;
            return acc + increment;
        }, 0), [rowValues, items]);

    useEffect(() => {
        setValue(fragmentSum);
    }, [fragmentSum, setValue]);

    return (
        <div className={classNames(styles.wrapper, className)}>
            {items.map((item, index) => (
                <CalculatorRow key={index} {...item} index={index} rowValues={rowValues} setRowValues={setRowValues} />
            ))}
        </div>
    );
};


const CalculatorRow = ({ label, caption, input, variant, className, index, rowValues, setRowValues, noSetValue }: CalculatorRowProps): JSX.Element => {

    const rowCurrency = useMemo(() => input.props.currency, [input]);
    const initialValue = useMemo(() => (
        input.type === 'value' || input.type === 'no-choice' || input.type === 'hidden') ? (input.props as InputValueProps).value : 0
    , [input]);
    const loadedCurrencies = useLoadedCurrencies();

    const dollarRate = useMemo(() => loadedCurrencies?.find(el => el.code === 'USD')?.rate, [loadedCurrencies]);
    const euroRate = useMemo(() => loadedCurrencies?.find(el => el.code === 'EUR')?.rate, [loadedCurrencies]);

    const currencyMultiplier = useMemo(() => {
        if (rowCurrency === 'USD') return dollarRate || 1;
        else if (rowCurrency === 'EUR') return euroRate || 1;
        else return 1;
    }, [rowCurrency, dollarRate, euroRate]);

    const relativeMultiplier = useMemo(() => input.type === 'relative' ? (input.props as RelativeInputValueProps).relativeMultiplier : 1, [input]);
    const relativeRow = (input.props as RelativeInputValueProps).relativeRow;
    const relativeValue = useMemo(() => input.type === 'relative' ? (roundToDecimal(rowValues[relativeRow || 0] * relativeMultiplier / currencyMultiplier, 2)) : null
        , [currencyMultiplier, input, relativeMultiplier, relativeRow, rowValues]);

    const steppedValue = useMemo(() => {
        if (input.type === 'relative-stepped' && (input.props as RelativeSteppedProps).steps) {
            const value = roundToDecimal(rowValues[relativeRow || 0] / currencyMultiplier, 2);
            const step = (input.props as RelativeSteppedProps).steps.find(step =>
                (typeof step.maxValue === 'number' && value >= step.minValue && value <= step.maxValue) ||
                (step.maxValue === 'infinity' && value >= step.minValue)
            );

            if (!step) return value;

            return step.isRelative ? value * step.stepValue : step.stepValue;
        } else return null;
    }, [input.type, input.props, rowValues, relativeRow, currencyMultiplier]);

    const [rowValue, setRowValue] = useState<number>(initialValue);

    useEffect(() => {
        if (!setRowValues) return;

        setRowValues(prev => {
            const next = [...prev];
            next[index] = rowValue * currencyMultiplier;
            return next;
        });
    }, [rowValue, index, setRowValues, currencyMultiplier, noSetValue]);

    return (
        <div className={
            classNames(
                styles.row,
                variant && styles[`is-${variant}`],
                variant && 'radius-34',
                className,
                input.type === 'hidden' && styles.hidden
            )}
        >

            <InputLabel className={styles.label}>
                {label}
                {caption &&
                    <InputCaption className={classNames((input.type === 'value' && variant) && styles['value-caption'])}>
                        {caption}
                    </InputCaption>
                }
            </InputLabel>

            {input.type === 'text' && <TextInput setRowValue={setRowValue} {...input.props as TextInputProps} />}
            {input.type === 'dropdown' && <DropdownInput setRowValue={setRowValue} {...input.props as DropdownInputProps} />}
            {input.type === 'checkbox' && <CheckboxInput setRowValue={setRowValue} {...input.props as CheckboxInputProps} />}
            {input.type === 'relative' && <InputValue {...input.props as InputValueProps} setRowValue={setRowValue} value={relativeValue || 0} />}
            {input.type === 'relative-stepped' && <InputValue {...input.props as InputValueProps} setRowValue={setRowValue} value={steppedValue || 0} />}
            {input.type === 'no-choice' && <InputValue className={styles['no-choice']} {...input.props as InputValueProps} />}
            {input.type === 'value' && <InputValue {...input.props as InputValueProps} />}
            {input.type === 'hidden' && <InputValue {...input.props as InputValueProps} />}
        </div>
    );
};

export { CalculatorFragment, CalculatorRow };