import Link from 'next/link';

import Icon from '@/components/atoms/Icon/Icon';
import Button from '@/components/atoms/Button/Button';

import styles from './Header.module.scss';


const Header = (): JSX.Element => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.logo}>
                <Link href='/'>
                    <Icon name='logo' />
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Button variant='outline' icon='otomoto' link='https://www.otomoto.pl/'>Oferta</Button>
                    </li>
                    <DefaultHeaderItem href='/'>O nas</DefaultHeaderItem>
                    <DefaultHeaderItem href='/proces'>Proces</DefaultHeaderItem>
                    <DefaultHeaderItem href='/kalkulator'>Kalkulator</DefaultHeaderItem>
                    <DefaultHeaderItem href='/tracking'>Tracking</DefaultHeaderItem>
                </ul>
            </nav>
            <nav className={styles['aside-nav']}>
                <ul>
                    <li>
                        <Button variant='accent' icon='phone'>Kontakt</Button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const DefaultHeaderItem = ({ href, children }: { href: string; children: string }): JSX.Element => {
    return (
        <li className={styles['header-item']}>
            <Link href={href}>{children}</Link>
        </li>
    );
};

export default Header;
