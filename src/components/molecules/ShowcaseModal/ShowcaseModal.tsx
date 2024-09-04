import type { StaticImageData } from 'next/image';

import Image from 'next/image';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

import { CMS } from '@/cms/about';
import { Heading, Title } from '../Heading/Heading';
import useClickOutside from '@/hooks/useClickOutside';
import { useGlobalStoreActions, useLightbox } from '@/store/useGlobalStore';

import Button from '@/components/atoms/Button/Button';
import Paragraph from '@/components/atoms/Paragraph/Paragraph';

import styles from './ShowcaseModal.module.scss';

const ShowcaseModal = (): JSX.Element | null => {

    const [currentImage, setCurrentImage] = useState<StaticImageData | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    useClickOutside(() => setLightbox(null));

    const lightbox = useLightbox();
    const { setLightbox } = useGlobalStoreActions();

    return (
        lightbox ?
            <motion.div ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={classNames(styles.wrapper, 'radius-17')}>

                {/* Closer */}
                <Button className={styles.close} icon='close' onClick={() => setLightbox(null)} />

                {/* Content */}
                <Heading className={styles.heading}>
                    <Title>{`${lightbox.carName} <span>(${lightbox.year})</span>`}</Title>
                </Heading>

                <div className={styles.info}>

                    <ul className={classNames(styles.list, 'font-size-21')}>
                        <li>Rocznik: <strong>{lightbox.year}</strong></li>
                        <li>Moc: <strong>{lightbox.horsepower} KM</strong></li>
                        <li>Pochodzenie: <strong>{lightbox.countryOrigin}</strong></li>
                        <li>Całkowity koszt projektu: <strong>{lightbox.overallCostPln} PLN</strong></li>
                    </ul>

                    <Paragraph className={classNames(styles.text, 'font-size-16')}>{lightbox.description}</Paragraph>
                </div>

                <ul className={styles.pictures}>

                    {lightbox.pictures.map((picture, index) => (
                        <li className='radius-17' key={index}>

                            <Image src={picture.src} alt={lightbox.carName} width={picture.width} height={picture.height} />

                            <button className='full' onClick={() => setCurrentImage(picture)}>
                                <span className='sr-only'>Powiększ zdjęcie</span>
                            </button>
                        </li>
                    ))}

                    <li className={styles.disclaimers}>
                        {CMS.STATS.disclaimers.map((disclaimer, i) => (
                            <Paragraph key={i} className='font-size-16'>
                                {disclaimer}
                            </Paragraph>
                        ))}
                    </li>

                </ul>

                {/* Image Lightbox */}
                <div className={classNames(styles['image-lightbox'], currentImage && styles['is-open'])}>
                    {currentImage && <Image src={currentImage.src} alt={lightbox.carName} width={currentImage.width} height={currentImage.height} />}

                    {/* Image lightbox closer */}
                    <Button className={styles['image-closer']} icon='close' onClick={() => setCurrentImage(null)} />
                </div>

            </motion.div> : null
    );
};

export default ShowcaseModal;