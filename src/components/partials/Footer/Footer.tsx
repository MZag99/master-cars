import classNames from 'classnames';

import Socials from '../Socials/Socials';
import { CMS_UNIVERSAL } from '@/cms/universal';

import LinkListItem from '@/components/molecules/LinkListItem/LinkListItem';

import styles from './Footer.module.scss';

export type FooterProps = {
    copyright: string;
    items: {
        link: string;
        name: string;
    }[];
};

const Footer = ({ copyright, items }: FooterProps): JSX.Element => {
    return (
        <footer className={classNames(styles.wrapper, 'module-wrapper')}>
            <span className={styles.copyright} dangerouslySetInnerHTML={{ __html: copyright }}></span>

            <ul className={styles.list}>
                {items.map((item, i) =>
                    <LinkListItem key={i} href={item.link}>{item.name}</LinkListItem>
                )}
            </ul>

            <Socials {...CMS_UNIVERSAL.SOCIALS} className={styles.socials} />
        </footer>
    );
};


export default Footer;