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
                    <li>
                        <Link href="/">O nas</Link>
                    </li>
                    <li>
                        <Link href="/proces">Proces</Link>
                    </li>
                    <li>
                        <Link href="/kalkulator">Kalkulator</Link>
                    </li>
                    <li>
                        <Link href="/tracking">Tracking</Link>
                    </li>
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

export default Header;
