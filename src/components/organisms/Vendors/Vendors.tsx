import type { icons } from '@/components/atoms/Icon/Icon';

import classNames from 'classnames';

import Button from '@/components/atoms/Button/Button';

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
                        <Button className='full' icon={item.logo as keyof typeof icons} link={item.url} />
                    </li>
                )}
            </ul>

            <div></div>
        </div>
    );
};

export default Vendors;