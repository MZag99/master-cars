'use client';

import type { ReactNode } from 'react';
import type { HeadingType } from '@/components/molecules/Heading/Heading';

import classNames from 'classnames';

import Button from '@/components/atoms/Button/Button';
import { Heading, Subtitle, Title } from '@/components/molecules/Heading/Heading';

import styles from './Calculator.module.scss';

export type CalculatorProps = {
    heading: HeadingType;
    children: ReactNode;
}

const Calculator = ({ heading, children }: CalculatorProps): JSX.Element => {
    return (
        <div className={classNames('module-wrapper', 'padding-block')}>

            <Heading>
                <Title size={heading.size}>{heading.title}</Title>
                {heading.subtitle && <Subtitle>{heading.subtitle}</Subtitle>}
                {heading.button && <Button className={styles.button} {...heading.button}>{heading.button.children}</Button>}
            </Heading>

            <div>
                { children }
            </div>
        </div>
    );
};

export default Calculator;