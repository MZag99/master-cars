import type { StaticImageData } from 'next/image';
import type { ButtonProps } from '@/components/atoms/Button/Button';

import Image from 'next/image';
import classNames from 'classnames';

import Button from '@/components/atoms/Button/Button';
import Warning from '@/components/atoms/Warning/Warning';
import Paragraph from '@/components/atoms/Paragraph/Paragraph';
import { Heading, HeadingType, Subtitle, Title } from '@/components/molecules/Heading/Heading';

import styles from './Text.module.scss';


export type TextProps = {
    heading: HeadingType;
    items: (TextItem | WarningItem | ImageItem)[];
    isDark?: boolean;
    button: ButtonProps & { children: string };
};

export type TextItem = {
    type: 'text';
    text: string;
}

export type WarningItem = {
    type: 'warning';
    text: string;
}

export type ImageItem = {
    type: 'image';
    image: StaticImageData;
    caption?: string;
    alt: string;
}

const Text = ({ heading, items, button, isDark }: TextProps): JSX.Element => {
    return (
        <div className={classNames(styles.wrapper, 'module-wrapper', 'padding-block', isDark && styles['is-dark'])}>

            <Heading className={styles.text}>
                <Title size='medium'>{heading.title}</Title>
                {heading.subtitle && <Subtitle>{heading.subtitle}</Subtitle>}
                {heading.button && <Button {...heading.button}>{heading.button.children}</Button>}
            </Heading>

            <div className={styles.content}>
                {items && items.map((item, index) =>
                    item.type === 'text' ?
                        <Paragraph key={index} className={classNames(styles.paragraph, isDark && styles['text-light'])}>{item.text}</Paragraph> :
                        item.type === 'warning' ?
                            <Warning key={index} text={item.text} /> :
                            item.type === 'image' &&
                            <div className={styles['image-item']}>
                                <Image key={index} fill src={item.image.src} alt={item.alt} className={classNames(styles.image, 'radius-34')} />
                                {item.caption && <span className={classNames(styles.caption, 'font-size-12')}>{item.caption}</span>}
                            </div>
                )}
            </div>

            {button && <Button {...button} className={styles.button}>{button.children}</Button>}

        </div>
    );
};

export default Text;