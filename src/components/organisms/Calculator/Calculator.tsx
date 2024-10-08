'use client';

import type { ReactNode } from 'react';
import type { HeadingType } from '@/components/molecules/Heading/Heading';

import Button from '@/components/atoms/Button/Button';
import Module from '@/components/partials/Module/Module';
import { Heading, Subtitle, Title } from '@/components/molecules/Heading/Heading';
import CurrencyWidget from '@/components/molecules/CurrencyWidget/CurrencyWidget';

import styles from './Calculator.module.scss';

export type CalculatorProps = {
    children: ReactNode;
    heading?: HeadingType;
    currencyWidget?: boolean;
}

const Calculator = ({ heading, children, currencyWidget }: CalculatorProps): JSX.Element => {
    return (
        <Module padding-block>

            {heading ?
                <Heading>
                    <Title size={heading.size}>{heading.title}</Title>
                    {heading.subtitle && <Subtitle>{heading.subtitle}</Subtitle>}
                    {heading.button && <Button className={styles.button} {...heading.button}>{heading.button.children}</Button>}
                </Heading> :
                <div></div>
            }

            <div>
                {children}
            </div>

            {currencyWidget && (
                <CurrencyWidget className={styles.currencies} />
            )}
        </Module>
    );
};

export default Calculator;