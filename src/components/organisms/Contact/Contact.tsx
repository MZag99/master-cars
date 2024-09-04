'use client';

import classNames from 'classnames';

import Icon from '@/components/atoms/Icon/Icon';
import Button from '@/components/atoms/Button/Button';

import styles from './Contact.module.scss';
import useAnimation from '@/hooks/useAnimation';
import { useRef } from 'react';

export type ContactProps = {
    info: string;
    emailButton: {
        email: string;
        copy: string;
    };
    contactItems: {
        name: string;
        phoneNumber: string;
        email: string;
    }[];
};

const Contact = ({ info, emailButton, contactItems }: ContactProps) => {

    const ref = useRef<HTMLDivElement>(null);

    useAnimation(ref, { name: 'fade', options: { duration: 0.5, delay: 0.5, ease: 'power3.out' } });

    return (
        <div ref={ref} className={classNames(styles.wrapper, 'module-wrapper')}>

            <div className={styles.info}>
                <Icon name='logo' className={styles.logo} />
                <p dangerouslySetInnerHTML={{ __html: info }}></p>
            </div>

            <div className={styles['contact-items']}>
                {contactItems.map((item, index) => (
                    <div key={index} className={styles['contact-item']}>
                        <h4>{item.name}</h4>
                        <p>{item.phoneNumber}</p>
                        <p>{item.email}</p>
                    </div>
                ))}
            </div>

            <Button className={styles.button} big variant='dark' icon='mail' link={emailButton.email}>{emailButton.copy}</Button>

        </div>
    );
};

export default Contact;