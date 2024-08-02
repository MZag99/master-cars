import type { ButtonProps } from '@/components/atoms/Button/Button';

import classNames from 'classnames';

import Button from '@/components/atoms/Button/Button';
import Paragraph from '@/components/atoms/Paragraph/Paragraph';
import { Heading, Subtitle, Title } from '@/components/molecules/Heading/Heading';

import styles from './Text.module.scss';

export type TextProps = {
    heading: {
        title: string;
        subtitle?: string;
        button?: ButtonProps & { children: string }
    }
    text: string;
    isDark?: boolean;
    button: ButtonProps & { children: string };
};

const Text = ({ heading, text, button, isDark }: TextProps): JSX.Element => {
    return (
        <div className={classNames(styles.wrapper, 'module-wrapper', 'padding-block', isDark && styles['is-dark'])}>

            <Heading className={styles.text}>
                <Title size='medium'>{heading.title}</Title>
                {heading.subtitle && <Subtitle>{heading.subtitle}</Subtitle>}
                {heading.button && <Button {...heading.button}>{heading.button.children}</Button>}
            </Heading>

            <Paragraph className={classNames(styles.paragraph, isDark && styles['text-light'])}>{text}</Paragraph>

            {button && <Button {...button} className={styles.button}>{button.children}</Button>}

        </div>
    );
};

export default Text;