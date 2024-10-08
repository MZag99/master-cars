'use client';

import type { DropdownInputProps, CheckboxInputProps, TextInputProps, InputValueProps, RelativeInputValueProps } from '@/components/atoms/CalculatorInputs/CalculatorInputs';

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
        type: 'text' | 'dropdown' | 'checkbox' | 'value' | 'no-choice' | 'relative',
        props: TextInputProps | DropdownInputProps | CheckboxInputProps | InputValueProps | RelativeInputValueProps;
    }
    caption?: string,
    variant?: 'accent' | 'outline',
    forceValue?: string,
    className?: string,
    rowValues: number[],
    setRowValues: (values: number[] | ((prev: number[]) => number[])) => void,
};

export type CalculatorFragmentProps = {
    setValue: (value: number) => void,
    items: (Omit<CalculatorRowProps, 'index' | 'setRowValues'>)[];
};


const CalculatorFragment = ({ items, setValue }: CalculatorFragmentProps): JSX.Element => {

    const [rowValues, setRowValues] = useState<number[]>(new Array(items.length).fill(0));

    const fragmentSum = useMemo(() => rowValues.reduce((acc, curr) => acc + curr, 0), [rowValues]);

    useEffect(() => {
        setValue(fragmentSum);
    }, [fragmentSum, setValue]);

    return (
        <div className={styles.wrapper}>
            {items.map((item, index) => (
                <CalculatorRow key={index} {...item} index={index} rowValues={rowValues} setRowValues={setRowValues} />
            ))}
        </div>
    );
};


const CalculatorRow = ({ label, caption, input, variant, className, index, rowValues, setRowValues }: CalculatorRowProps): JSX.Element => {

    const rowCurrency = useMemo(() => input.props.currency, [input]);
    const initialValue = useMemo(() => (input.type === 'value' || input.type === 'no-choice') ? (input.props as InputValueProps).value : 0, [input]);
    const loadedCurrencies = useLoadedCurrencies();

    const dollarRate = useMemo(() => loadedCurrencies?.find(el => el.code === 'USD')?.rate, [loadedCurrencies]);
    const euroRate = useMemo(() => loadedCurrencies?.find(el => el.code === 'EUR')?.rate, [loadedCurrencies]);

    const currencyMultiplier = useMemo(() => {
        if (rowCurrency === 'USD') return dollarRate || 1;
        else if (rowCurrency === 'EUR') return euroRate || 1;
        else return 1;
    }, [rowCurrency, dollarRate, euroRate]);

    const relativeMultiplier = useMemo(() => input.type === 'relative' ? (input.props as RelativeInputValueProps).relativeMultiplier : 1, [input]);
    const relativeRow = useMemo(() => input.type === 'relative' ? (input.props as RelativeInputValueProps).relativeRow : null, [input]);
    const relativeValue = useMemo(() => input.type === 'relative' ? (roundToDecimal(rowValues[relativeRow || 0] * relativeMultiplier / currencyMultiplier, 2)) : null
        , [currencyMultiplier, input, relativeMultiplier, relativeRow, rowValues]);

    const [rowValue, setRowValue] = useState<number>(initialValue);

    useEffect(() => {
        if (!setRowValues) return;

        setRowValues(prev => {
            const next = [...prev];
            next[index] = rowValue * currencyMultiplier;
            return next;
        });
    }, [rowValue, index, setRowValues, currencyMultiplier]);

    return (
        <div className={classNames(styles.row, variant && styles[`is-${variant}`], variant && 'radius-34', className)}>

            <InputLabel className={styles.label}>{label}</InputLabel>

            {caption &&
                <InputCaption className={classNames((input.type === 'value' && variant) && styles['value-caption'])}>
                    {caption}
                </InputCaption>
            }

            {input.type === 'text' && <TextInput setRowValue={setRowValue} {...input.props as TextInputProps} />}
            {input.type === 'dropdown' && <DropdownInput setRowValue={setRowValue} {...input.props as DropdownInputProps} />}
            {input.type === 'checkbox' && <CheckboxInput setRowValue={setRowValue} {...input.props as CheckboxInputProps} />}
            {input.type === 'value' && <InputValue {...input.props as InputValueProps} />}
            {input.type === 'relative' && <InputValue {...input.props as InputValueProps} setRowValue={setRowValue} value={relativeValue || 0} />}
            {input.type === 'no-choice' && <InputValue className={styles['no-choice']} {...input.props as InputValueProps} />}
        </div>
    );
};

export { CalculatorFragment, CalculatorRow };