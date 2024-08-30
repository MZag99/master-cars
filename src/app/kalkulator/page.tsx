'use client';

import { useMemo, useState } from 'react';

import { CMS } from '@/cms/calculator';
import { CMS_UNIVERSAL } from '@/cms/universal';

import Socials from '@/components/partials/Socials/Socials';
import Calculator from '@/components/organisms/Calculator/Calculator';
import { Heading, Title } from '@/components/molecules/Heading/Heading';
import { CalculatorFragment, CalculatorRow } from '@/components/molecules/CalculatorFragment/CalculatorFragment';

import styles from './page.module.scss';

export default function CalculatorPage() {

    const [baseCalculatorSum, setBaseCalculatorSum] = useState(0);
    const [tollCalculatorSum, setTollCalculatorSum] = useState(0);
    const [bonusCalculatorSum, setBonusCalculatorSum] = useState(0);
    
    const summaryValue = useMemo(() => baseCalculatorSum + tollCalculatorSum + bonusCalculatorSum, [baseCalculatorSum, tollCalculatorSum, bonusCalculatorSum]);


    return (
        <main>
            <Calculator heading={CMS.CALCULATOR_MAIN.HEADING}>

                {/* Base (top) calculator */}
                <CalculatorFragment
                    setValue={setBaseCalculatorSum}
                    items={
                        [
                            ...CMS.CALCULATOR_MAIN.BASE_CALCULATOR_ITEMS,
                            {
                                ...CMS.CALCULATOR_MAIN.BASE_SUMMARY_ROW,
                                input: { type: 'value', props: { value: baseCalculatorSum, currency: 'pln' } }
                            }
                        ]
                    }
                />

                <Heading className={styles['margin-top-bottom']}>
                    <Title size='small'>{CMS.CALCULATOR_MAIN.SEPARATOR_TEXT}</Title>
                </Heading>

                {/* Toll (bottom) calculator */}
                <CalculatorFragment
                    setValue={setTollCalculatorSum}
                    items={
                        [
                            ...CMS.CALCULATOR_MAIN.TOLL_CALCULATOR_ITEMS,
                            {
                                ...CMS.CALCULATOR_MAIN.TOLL_SUMMARY_ROW,
                                input: { type: 'value', props: { value: baseCalculatorSum, currency: 'pln' } }
                            }
                        ]
                    }
                />

            </Calculator>

            <Calculator heading={CMS.CALCULATOR_BONUS.HEADING}>

                <Heading className={styles['margin-bottom']}>
                    <Title size='small'>{CMS.CALCULATOR_BONUS.SEPARATOR_TEXT}</Title>
                </Heading>

                {/* Bonus calculator */}
                <CalculatorFragment
                    setValue={setBonusCalculatorSum}
                    items={CMS.CALCULATOR_BONUS.BONUS_CALCULATOR_ITEMS}
                />

                {/* Summary */}
                <Heading className={styles['margin-top-bottom']}>
                    <Title size='small'>{CMS.CALCULATOR_BONUS.SUMMARY}</Title>
                </Heading>

                {/* Final sum */}
                <CalculatorRow
                    {...CMS.CALCULATOR_BONUS.SUMMARY_ROW}
                    input={{ type: 'value', props: { value: summaryValue, currency: 'pln' } }}
                />

            </Calculator>

            <Socials {...CMS_UNIVERSAL.SOCIALS} isHiding />
        </main>
    );
}
