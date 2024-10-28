'use client';

import type { ReceiverData } from '@/types/universal';

import { useRef } from 'react';
import classNames from 'classnames';

import useAnimation from '@/hooks/useAnimation';
import useCssVariable from '@/hooks/useCssVariable';
import { useBreakpoints } from '@/store/useBrowserStore';


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

const Contact = ({ emailButton, contactItems, id, receiverData }: ContactProps) => {

    const ref = useRef<HTMLDivElement>(null);

    const breakpoint = useBreakpoints();

    useAnimation(ref, { name: 'fade', options: { duration: 0.5, delay: 0.5, ease: 'power3.out' } });
    useCssVariable(ref, '--contact-height', 'clientHeight');

    return (
        <Module id={id} ref={ref} className={classNames(styles.wrapper, 'font-size-18')}>

            <div className={styles.info}>
                <Icon name='logo' className={styles.logo} />
                {/* <p className={breakpoint?.desktop ? 'font-size-18' : 'font-size-14'} dangerouslySetInnerHTML={{ __html: info }}></p> */}
            </div>

            <div className={styles['contact-items']}>
                {contactItems.map((item, index) => (
                    <div key={index} className={styles['contact-item']}>
                        <h4>{item.name}</h4>
                        <p className={breakpoint?.desktop ? 'font-size-18' : 'font-size-14 '}>{item.phoneNumber}</p>
                        <p className={breakpoint?.desktop ? 'font-size-18' : 'font-size-14'}>{item.email}</p>
                    </div>
                ))}
            </div>

            {breakpoint?.desktop && <EmailWidget copy={emailButton.copy} receiverData={receiverData} className={styles['email-widget']} />}

        </Module>
    );
};

export default Contact;