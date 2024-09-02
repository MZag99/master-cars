import classNames from 'classnames';

import { CMS } from '@/cms/calculator';
import { useLoadedCurrencies } from '@/store/useControlsStore';

import styles from './CurrencyWidget.module.scss';

export type CurrencyWidgetProps = {
    className?: string;
}

const CurrencyWidget = ({ className }: CurrencyWidgetProps): JSX.Element => {
    const currencies = useLoadedCurrencies();

    return (
        <div className={classNames(styles.wrapper, 'radius-17', className)}>
            <h2 className='font-size-23 font-weight-400'>{CMS.CURRENCY_WIDGET_COPY}</h2>
            <ul>
                {currencies?.map(currency => (
                    <li className={classNames(styles.item, styles['item-grid'], 'font-size-16')} key={currency.code}>

                        <span>{currency.code}</span>

                        <div>
                            <span className={classNames(styles.label, 'font-size-10')}>Kupno</span>
                            <span className={styles.rate}>{currency.rate}</span>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CurrencyWidget;