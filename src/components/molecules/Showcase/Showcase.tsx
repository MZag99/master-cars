import type { StaticImageData } from 'next/image';

import Image from 'next/image';
import classNames from 'classnames';

import Icon from '@/components/atoms/Icon/Icon';

import styles from './Showcase.module.scss';

export type ShowcaseProps = {
    items: ShowcaseItem[];
};

export type ShowcaseItem = {
    year: number;
    carName: string;
    description: string;
    countryOrigin: string;
    overallCostPln: number;
    pictures: StaticImageData[];
};

export type ShowcaseLabelProps = {
    text: string;
    image?: boolean;
    className?: string;
};

const Showcase = ({ items }: ShowcaseProps): JSX.Element => {
    return (
        <ul className={styles.list}>
            {items.map((item, index) =>
                <li key={index} className={classNames(styles['item-wrapper'], 'radius-34')}>

                    <div className={styles['item-image']}>
                        <Image src={item.pictures[0].src} alt={item.carName} fill />
                    </div>

                    <ShowcaseLabel text={item.pictures.length.toString()} className={styles['image-label']} image />
                    <ShowcaseLabel text={item.carName} className={styles['name-label']} />

                </li>
            )}
        </ul>
    );
};

const ShowcaseLabel = ({ text, image, className }: ShowcaseLabelProps) => {
    return (
        <span className={classNames(styles['showcase-label'], 'radius-17', className)}>
            {text}
            {image && <Icon name='picture'/>}
        </span>
    );
};

export default Showcase;
