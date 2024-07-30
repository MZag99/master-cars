import classNames from 'classnames';

import { CMS } from '@/cms/all';

import Icon from '@/components/atoms/Icon/Icon';

import styles from './Socials.module.scss';

type SocialsProps = {
    className?: string;
};

const Socials = ({ className }: SocialsProps): JSX.Element => {
    return (
        <ul className={classNames(styles.wrapper, className, 'radius-17')}>
            {CMS.SOCIALS.ITEMS.map((item, i) =>
                <li key={i}>
                    <a href={item.link} target='_blank'><Icon name={item.name} /></a>
                </li>
            )}
        </ul>
    );
};

export default Socials;