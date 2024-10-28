import type { ReceiverData } from '@/types/universal';

import classNames from 'classnames';
import { sendForm } from 'emailjs-com';
import { useMemo, useState } from 'react';

import useClickOutside from '@/hooks/useClickOutside';

import Icon from '@/components/atoms/Icon/Icon';

import styles from './EmailWidget.module.scss';

type EmailWidgetProps = {
    copy: string;
    receiverData: ReceiverData;
    className?: string;
}

const EmailWidget = ({ copy, receiverData, className }: EmailWidgetProps): JSX.Element => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [isConsent, setIsConsent] = useState(false);
    const [senderEmail, setSenderEmail] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isSendingError, setIsSendingError] = useState(false);

    const submitMessage = useMemo(() => {
        if (isSending) return 'Wysyłanie...';
        if (isSent) return 'Wysłano!';
        if (isSendingError) return 'Błąd wysyłania!';
        return 'Wyślij';
    }, [isSending, isSent, isSendingError]);

    const submitClassname = useMemo(() => {
        if (isSending) return styles['is-sending'];
        if (isSent) return styles['is-sent'];
        if (isSendingError) return styles['is-error'];
        return '';
    }, [isSending, isSent, isSendingError]);

    const wrapperRef = useClickOutside(() => setIsExpanded(false));

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSent) return;

        const { serviceId, templateId, userId } = receiverData;

        setIsSending(true);

        sendForm(serviceId, templateId, e.target as HTMLFormElement, userId)
            .then(() => {
                setIsSent(true);
                setIsSending(false);
            }, () => {
                setIsSendingError(true);
                setIsSending(false);
            });
    };


    return (
        <div
            ref={wrapperRef}
            className={classNames(styles.wrapper, isExpanded && styles['is-expanded'], 'font-size-23 radius-34', className)}
        >

            <p className={styles.copy}>
                {copy}
                <Icon name='mail' />
            </p>


            <form className={classNames(styles.form, 'font-size-14', submitClassname)} onSubmit={sendEmail}>
                <div className={styles.top}>
                    <input
                        type='email'
                        name='from_name'
                        placeholder='Twój adres email'
                        className={styles.input}
                        required
                        value={senderEmail}
                        onChange={e => setSenderEmail(e.target.value)}
                    />

                    <input
                        type='checkbox'
                        checked={isConsent}
                        required
                        onChange={() => setIsConsent(!isConsent)}
                        className={styles.checkbox}
                    />

                    <span className={classNames(styles.consent, 'font-size-10')}>
                        Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z <a href='/polityka-prywatnosci'>Polityką Prywatności</a>
                    </span>

                </div>
                <div className={styles.bottom}>
                    <textarea required className={styles['text-input']} name='message' placeholder='Jak mozemy pomóc?' />
                    <input type='submit' value={submitMessage} className={classNames(styles.submit, 'radius-17')} />
                </div>
            </form>

            <button
                className={styles.button}
                onClick={() => {
                    setIsExpanded(!isExpanded);
                }}
            >
            </button>
        </div>
    );
};

export default EmailWidget;