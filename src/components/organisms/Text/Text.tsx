import classNames from 'classnames';

import Button from '@/components/atoms/Button/Button';
import Paragraph from '@/components/atoms/Paragraph/Paragraph';
import { Heading, Title } from '@/components/molecules/Heading/Heading';

import styles from './Text.module.scss';

type AboutProps = {
    title: string;
    text: string;
    isDark?: boolean;
    button?: string;
};

const Text = ({ title, text, button, isDark }: AboutProps): JSX.Element => {
    return (
        <div className={classNames(styles.wrapper, 'module-wrapper', 'padding-block', isDark && styles['is-dark'])}>

            <Heading className={styles.text}>
                <Title size='medium'>{title}</Title>
            </Heading>

            <Paragraph className={styles.paragraph}>{text}</Paragraph>

            {button && <Button variant='light' big link='/proces' icon='arrowUp' className={styles.button}>Proces</Button>}

        </div>
    );
};

export default Text;