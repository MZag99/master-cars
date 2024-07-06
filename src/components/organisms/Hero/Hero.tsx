import Image from 'next/image';
import classNames from 'classnames';

import Button from '@/components/atoms/Button/Button';
import { Heading, Subtitle, Title } from '@/components/molecules/Heading/Heading';

import styles from './Hero.module.scss';

interface HeroProps {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const Hero = ({ title, subtitle, imageUrl }: HeroProps): JSX.Element => {
    return (
        <div className={classNames(styles.wrapper, 'module-wrapper')}>

            <Image fill src={imageUrl} alt='Hero image' className={styles.image} />

            <Heading className={styles.text}>

                <Title size='large'>{title}</Title>

                <Subtitle>{subtitle}</Subtitle>

                <div className={styles.buttons}>
                    <Button variant='accent'>O nas</Button>
                    <Button variant='outline' icon='otomoto' link='https://www.otomoto.pl/'>Oferta</Button>
                </div>
            </Heading>

        </div>
    );
};

export default Hero;