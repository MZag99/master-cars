'use client';

import type { StaticImageData } from 'next/image';
import type { ButtonProps } from '@/components/atoms/Button/Button';
import type { HeadingType } from '@/components/molecules/Heading/Heading';

import Image from 'next/image';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';

import useAnimation from '@/hooks/useAnimation';
import { useIsPageLoaded } from '@/store/useGlobalStore';

import Button from '@/components/atoms/Button/Button';
import Warning from '@/components/atoms/Warning/Warning';
import Module from '@/components/partials/Module/Module';
import Paragraph from '@/components/atoms/Paragraph/Paragraph';
import { Heading, Subtitle, Title } from '@/components/molecules/Heading/Heading';

import styles from './Text.module.scss';


export type TextProps = {
    heading: HeadingType;
    items: (TextItem | WarningItem | ImageItem)[];
    isDark?: boolean;
    button: ButtonProps & { children: string };
    id?: string;
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

const Text = ({ heading, items, button, isDark, id }: TextProps): JSX.Element => {

    const isPageLoaded = useIsPageLoaded();
    
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLSpanElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const sideButtonRef = useRef<HTMLButtonElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const textRefs = useRef<HTMLElement[]>([]);
    const warningRefs = useRef<HTMLElement[]>([]);
    const imageRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
        if (!contentRef.current) return;

        const content = contentRef.current;

        textRefs.current = [...content.querySelectorAll('.js-text-item')] as HTMLElement[];
        warningRefs.current = [...content.querySelectorAll('.js-warning-item')] as HTMLElement[];
        imageRefs.current = [...content.querySelectorAll('.js-image-item')] as HTMLElement[];
    }, []);

    useAnimation(titleRef, { name: 'splitUp', options: { delay: 0.5, duration: 1, ease: 'power3.out', stagger: 0.01 } }, [isPageLoaded]);
    useAnimation(subtitleRef, { name: 'splitUp', options: { delay: 0.5, duration: 1, ease: 'power3.out', stagger: 0.01 } }, [isPageLoaded]);
    useAnimation(textRefs, { name: 'splitUp', options: { delay: 0.3, duration: 1, ease: 'power3.out', stagger: 0.002 } }, [isPageLoaded]);
    useAnimation(warningRefs, { name: 'fadeUp', options: { delay: 0.3, duration: 1, ease: 'power3.out' } }, [isPageLoaded]);
    useAnimation(imageRefs, { name: 'fadeUp', options: { delay: 0.3, duration: 1, ease: 'power3.out' } }, [isPageLoaded]);
    useAnimation(buttonRef, { name: 'fadeUp', options: { delay: 0.3, duration: 1, ease: 'power3.out' } }, [isPageLoaded]);
    useAnimation(sideButtonRef, { name: 'fadeUp', options: { delay: 0.3, duration: 1, ease: 'power3.out' } }, [isPageLoaded]);

    return (
        <Module paddingBlock className={classNames(isDark && 'is-dark', styles.wrapper)} id={id}>

            <Heading className={classNames(styles.text, heading.subtitle && styles['has-subtitle'])}>
                <Title ref={titleRef} size='medium'>{heading.title}</Title>
                {heading.subtitle && <Subtitle ref={subtitleRef}>{heading.subtitle}</Subtitle>}
                {heading.button && <Button ref={buttonRef} {...heading.button}>{heading.button.children}</Button>}
            </Heading>

            <div ref={contentRef} className={styles.content}>
                {items && items.map((item, index) =>
                    item.type === 'text' ?

                        <Paragraph key={index} className={classNames(styles.paragraph, isDark && styles['text-light'], 'js-text-item')}>{item.text}</Paragraph> :

                        item.type === 'warning' ?

                            <Warning className='js-warning-item' key={index} text={item.text} /> :

                            item.type === 'image' &&

                            <div key={index} className={classNames(styles['image-item'], 'js-image-item')}>
                                <Image fill src={item.image.src} alt={item.alt} className={classNames(styles.image, 'radius-34')} />
                                {item.caption && <span className={classNames(styles.caption, 'font-size-12')}>{item.caption}</span>}
                            </div>
                )}
            </div>

            {button && <Button ref={sideButtonRef} {...button} className={styles.button}>{button.children}</Button>}

        </Module>
    );
};

export default Text;
