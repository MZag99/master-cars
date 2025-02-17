'use client';
import type { NavigationItem } from '@/types/universal';

import Link from 'next/link';
// import { useMemo } from 'react';
import gsap from 'gsap/dist/gsap';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

import { useBreakpoints } from '@/store/useBrowserStore';
// import useScrollDirection from '@/hooks/useScrollDirection';
import { useGlobalStoreActions, useIsMenuOpen } from '@/store/useGlobalStore';

import Icon from '@/components/atoms/Icon/Icon';
import Button from '@/components/atoms/Button/Button';
import LinkListItem from '@/components/molecules/LinkListItem/LinkListItem';

import styles from './Header.module.scss';

gsap.registerPlugin(ScrollToPlugin);

export type HeaderProps = {
    items: NavigationItem[]
}

const Header = ({ items }: HeaderProps): JSX.Element => {

    const pathname = usePathname();
    // const { down } = useScrollDirection();
    const breakpoint = useBreakpoints();
    const { setIsMenuOpen } = useGlobalStoreActions();
    const isMenuOpen = useIsMenuOpen();

    // const isHidden = useMemo(() => down, [down]);

    return (
        <header className={classNames(styles.wrapper)}>

            <div className={styles.logo}>
                <Link href='/'>
                    <Icon name='logo' />
                </Link>
            </div>

            {breakpoint?.desktop &&
                <>
                    <nav className={styles.nav}>
                        <ul>
                            {items.map((item, i) => {
                                return item.button ?
                                    <li key={i}>
                                        <Button variant={item.button.variant} icon={item.button.icon} link={item.link}>{item.name}</Button>
                                    </li> :
                                    <LinkListItem key={i} href={item.link} isActive={pathname === item.link}>
                                        {item.name}
                                    </LinkListItem>;
                            })}
                        </ul>
                    </nav>

                    <nav className={styles['aside-nav']}>
                        <ul>
                            <li>
                                <Button
                                    variant='accent'
                                    icon='phone'
                                    onClick={() => gsap.to(window, { scrollTo: { y: '#contact' }, duration: 1, ease: 'power3.out' })}>
                                    Kontakt
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </>
            }

            {!breakpoint?.desktop &&
                <Button variant='outline' className={classNames(styles.hamburger, isMenuOpen && styles['is-menu-open'])} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Icon name={isMenuOpen ? 'close-thin' : 'hamburger'} />
                </Button>
            }

        </header>
    );
};

export default Header;
