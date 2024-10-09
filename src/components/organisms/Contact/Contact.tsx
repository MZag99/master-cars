'use client';

import type { ReceiverData } from '@/types/universal';

import { useRef } from 'react';

import useAnimation from '@/hooks/useAnimation';
import useCssVariable from '@/hooks/useCssVariable';

import Icon from '@/components/atoms/Icon/Icon';
import Module from '@/components/partials/Module/Module';
import EmailWidget from '@/components/molecules/EmailWidget/EmailWidget';

import styles from './Contact.module.scss';

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
    receiverData: ReceiverData;
    id?: string;
};

const Contact = ({ info, emailButton, contactItems, id, receiverData }: ContactProps) => {

    const ref = useRef<HTMLDivElement>(null);

    useAnimation(ref, { name: 'fade', options: { duration: 0.5, delay: 0.5, ease: 'power3.out' } });
    useCssVariable(ref, '--contact-height', 'clientHeight');

    return (
        <Module id={id} ref={ref} className={styles.wrapper}>

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

            <EmailWidget copy={emailButton.copy} receiverData={receiverData} className={styles['email-widget']} />

        </Module>
    );
};

export default Contact;