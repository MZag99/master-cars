'use client';

import { useEffect, useMemo, useState } from 'react';

import { CMS } from '@/cms/calculator';
import { CMS_UNIVERSAL } from '@/cms/universal';
import useCurrencies from '@/hooks/useCurrencies';
import { roundToDecimal } from '@/utils/roundToDecimal';
import { useControlsStoreActions } from '@/store/useControlsStore';

import Socials from '@/components/partials/Socials/Socials';
import Calculator from '@/components/organisms/Calculator/Calculator';
import { Heading, Title } from '@/components/molecules/Heading/Heading';
import { CalculatorFragment, CalculatorRow } from '@/components/molecules/CalculatorFragment/CalculatorFragment';

import styles from './page.module.scss';

export default function CalculatorPage() {

    const [baseCalculatorSum, setBaseCalculatorSum] = useState(0);
    const [tollCalculatorSum, setTollCalculatorSum] = useState(0);
    const [bonusCalculatorSum, setBonusCalculatorSum] = useState(0);

    const { setCurrencies } = useControlsStoreActions();

    const currencies = useCurrencies(['USD', 'EUR']);

    const summaryValue = useMemo(() => baseCalculatorSum + tollCalculatorSum + bonusCalculatorSum, [baseCalculatorSum, tollCalculatorSum, bonusCalculatorSum]);

    useEffect(() => {
        setCurrencies(currencies);
    }, [currencies, setCurrencies]);

    return (
        <article>
            <Calculator heading={CMS.CALCULATOR_MAIN.HEADING} currencyWidget>

                {/* Base (top) calculator */}
                <CalculatorFragment
                    className={styles['calc-base']}
                    setValue={setBaseCalculatorSum}
                    items={
                        [
                            ...CMS.CALCULATOR_MAIN.BASE_CALCULATOR_ITEMS,
                            {
                                ...CMS.CALCULATOR_MAIN.BASE_SUMMARY_ROW,
                                input: { type: 'value', props: { value: roundToDecimal(baseCalculatorSum, 2), currency: 'PLN' } }
                            }
                        ]
                    }
                />

                <Heading className={styles['margin-top-bottom']}>
                    <Title size='small'>{CMS.CALCULATOR_MAIN.SEPARATOR_TEXT}</Title>
                </Heading>

                {/* Toll (bottom) calculator */}
                <CalculatorFragment
                    className={styles['calc-toll']}
                    setValue={setTollCalculatorSum}
                    items={
                        [
                            {
                                label: 'Wartość pojazdu',
                                noSetValue: true,
                                input: {
                                    type: 'text',
                                    props: {
                                        currency: 'PLN',
                                        value: 0,
                                        placeholder: Math.round(baseCalculatorSum).toString()
                                    }
                                }
                            },
                            ...CMS.CALCULATOR_MAIN.TOLL_CALCULATOR_ITEMS,
                            {
                                ...CMS.CALCULATOR_MAIN.TOLL_SUMMARY_ROW,
                                input: { type: 'value', props: { value: roundToDecimal(tollCalculatorSum, 2), currency: 'PLN' } }
                            }
                        ]
                    }
                />

            </Calculator>

            <Calculator>

                <Heading className={styles['margin-bottom']}>
                    <Title size='small'>{CMS.CALCULATOR_BONUS.SEPARATOR_TEXT}</Title>
                </Heading>

                {/* Bonus calculator */}
                <CalculatorFragment
                    className={styles['calc-bonus']}
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
                    input={{ type: 'value', props: { value: roundToDecimal(summaryValue, 2), currency: 'PLN' } }}
                />

                {/* <Documents title={CMS.UNIVERSAL.DOCUMENTS_TITLE} className={styles.documents} items={CMS.UNIVERSAL.DOCUMENTS_ITEMS} /> */}

            </Calculator>

            <Socials {...CMS_UNIVERSAL.SOCIALS} isHiding />
        </article>
    );
}
