'use client';

import type { Currency } from '@/types/universal';
import type { ChangeEvent, ReactNode } from 'react';

import classNames from 'classnames';
import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';

import useClickOutside from '@/hooks/useClickOutside';

import Icon from '@/components/atoms/Icon/Icon';

import styles from './CalculatorInputs.module.scss';


export type CalculatorInputProps = {
    currency: Currency;
    className?: string;
    setRowValue?: (value: number) => void;
}

export type TextInputProps = CalculatorInputProps & { placeholder?: string };

export type CheckboxInputProps = CalculatorInputProps & { label?: string, value: string };

export type InputValueProps = CalculatorInputProps & { value: number };

export type DropdownInputProps = CalculatorInputProps & { options: { name: string, value: string }[] };

export type DropdownOption = {
    name: string;
    value: string | number;
}

export type InputLabelProps = {
    children: ReactNode;
    className?: string;
}


export type CaptionLabelProps = Omit<InputLabelProps, 'setRowValue'>;

const InputWrapper = forwardRef<HTMLDivElement, { children: ReactNode, onClick?: (e: React.MouseEvent) => void, className?: string }>(({ children, onClick, className }, ref) => {
    return (
        <div ref={ref} className={classNames(styles.wrapper, 'radius-17', 'font-size-16', className)}>
            {onClick && <button className='full' onClick={onClick}></button>}
            {children}
        </div>
    );
});


const TextInput = ({ currency, placeholder, setRowValue }: TextInputProps): JSX.Element => {
    const [value, setValue] = useState(placeholder ?? '');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const regex = /^[0-9]*$/; // Only allow numbers

        if (regex.test(inputValue)) {
            setRowValue && setRowValue(parseFloat(inputValue || '0'));
            setValue(inputValue);
        }
    };

    return (
        <InputWrapper>
            <input maxLength={20} type='text' required value={value} onChange={handleChange} placeholder={placeholder} />
            <span>{currency}</span>
        </InputWrapper>
    );
};


const DropdownInput = ({ options, setRowValue, className }: DropdownInputProps): JSX.Element => {
    const [name, setName] = useState(options[0].name);
    const [isOpen, setIsOpen] = useState(false);

    const wrapperRef = useClickOutside(() => setIsOpen(false));

    const handleChange = (option: DropdownOption) => {
        const inputValue = option.value.toString();
        setRowValue && setRowValue(parseFloat(inputValue));
        setName(option.name);
    };

    const onItemClick = (option: DropdownOption) => {
        setIsOpen(false);
        handleChange(option);
    };

    useEffect(() => {
        setRowValue && setRowValue(parseFloat(options[0].value));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <InputWrapper
            ref={wrapperRef}
            onClick={() => setIsOpen(!isOpen)}
            className={classNames(isOpen && styles['is-open'], styles['dropdown-wrapper'], className)}
        >
            <span>{name}</span>

            <ul className={styles.dropdown}>
                {options.map((option, index) => (
                    <li key={index} onClick={() => onItemClick(option)}>
                        {option.name}
                    </li>
                ))}
            </ul>

            <Icon name='chevron' />
        </InputWrapper>
    );
};


const CheckboxInput = ({ setRowValue, value, currency }: CheckboxInputProps): JSX.Element => {
    const [isChecked, setIsChecked] = useState(false);
    const [isInit, setIsInit] = useState(true);

    const currencySymbol = useMemo(() => currency === 'dollar' ? '$' : ' PLN', [currency]);

    const handleChange = useCallback(() => {
        setIsChecked(!isChecked);
    }, [isChecked, setIsChecked]);

    useEffect(() => {
        if (!isInit) {
            setRowValue && setRowValue(isChecked ? parseFloat(value) : 0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isChecked, setRowValue, value]);

    useEffect(() => {
        setIsInit(false);
    }, []);

    return (
        <InputWrapper className={classNames(styles['checkbox-wrapper'], 'font-size-23')}>
            <label>
                <span>{value}{currencySymbol}</span>
                <input
                    type='checkbox'
                    value={value}
                    checked={isChecked}
                    onChange={handleChange}
                />
            </label>
        </InputWrapper>
    );
};


const InputLabel = ({ children, className }: InputLabelProps): JSX.Element => {
    return (
        <div className={classNames('font-size-23', className)}>
            <span>{children}</span>
        </div>
    );
};


const InputValue = ({ className, value, currency }: InputValueProps): JSX.Element => {

    const currencySymbol = useMemo(() => currency === 'dollar' ? '$' : ' PLN', [currency]);

    return (
        <div className={classNames('font-size-23', className)}>
            <span>{value}{currencySymbol}</span>
        </div>
    );
};


const InputCaption = ({ children, className }: InputLabelProps): JSX.Element => {
    return (
        <p className={classNames(styles.caption, 'font-size-12', className)}>
            {children}
        </p>
    );
};


InputWrapper.displayName = 'InputWrapper';

export { TextInput, DropdownInput, CheckboxInput, InputLabel, InputCaption, InputValue };