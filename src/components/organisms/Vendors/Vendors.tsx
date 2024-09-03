import type { icons } from '@/components/atoms/Icon/Icon';

import classNames from 'classnames';

import Icon from '@/components/atoms/Icon/Icon';

import styles from './Vendors.module.scss';

export type VendorsProps = {
    items: {
        logo: string;
        url: string;
    }[];
};

const Vendors = ({ items }: VendorsProps) => {
    return (
        <div className='module-wrapper'>
            <div></div>

            <ul className={styles.list}>
                {items.map((item, index) =>
                    <li className={classNames(styles.item, 'radius-17')} key={index}>
                        <a className='full' href={item.url} target='_blank' rel='noreferrer'>
                            <Icon name={item.logo as keyof typeof icons} />
                        </a>
                    </li>
                )}
            </ul>

            <div></div>
        </div>
    );
};

export default Vendors;