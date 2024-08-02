'use client';

import classNames from 'classnames';

import { CMS } from '@/cms/all';
import useFooterInView from '@/hooks/useFooterInView';

import Icon from '@/components/atoms/Icon/Icon';

import styles from './Socials.module.scss';

type SocialsProps = {
    isHiding?: boolean;
    className?: string;
};

const Socials = ({ isHiding, className }: SocialsProps): JSX.Element => {
    const isFooterInView = useFooterInView();

    return (
        <ul className={classNames(className ?? styles.wrapper, isHiding && isFooterInView && styles['is-hidden'], 'radius-17')}>
            {CMS.SOCIALS.items.map((item, i) =>
                <li key={i}>
                    <a href={item.link} target='_blank'><Icon name={item.name} /></a>
                </li>
            )}
        </ul>
    );
};

export default Socials;