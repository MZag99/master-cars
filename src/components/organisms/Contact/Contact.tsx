import classNames from 'classnames';

import Icon from '@/components/atoms/Icon/Icon';
import Button from '@/components/atoms/Button/Button';

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
};

const Contact = ({ info, emailButton, contactItems }: ContactProps) => {
    return (
        <div className={classNames(styles.wrapper, 'module-wrapper')}>

            <div className={styles.info}>
                <Icon name='logo' className={styles.logo} />
                <p dangerouslySetInnerHTML={{ __html: info }}></p>
            </div>

            <Button big variant='dark' icon='mail' link={emailButton.email}>{emailButton.copy}</Button>

            <div className={styles['contact-items']}>
                {contactItems.map((item, index) => (
                    <div key={index} className={styles['contact-item']}>
                        <h4>{item.name}</h4>
                        <p>{item.phoneNumber}<Icon name='phone' /></p>
                        <p>{item.email}<Icon name='mail' /></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;