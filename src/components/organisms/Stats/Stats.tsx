import type { NumbersItem } from '@/components/molecules/Numbers/Numbers';
import type { ShowcaseItem } from '@/components/molecules/Showcase/Showcase';

import classNames from 'classnames';

import Numbers from '@/components/molecules/Numbers/Numbers';
import Paragraph from '@/components/atoms/Paragraph/Paragraph';
import Showcase from '@/components/molecules/Showcase/Showcase';

import styles from './Stats.module.scss';

type StatsProps = {
    numberItems: NumbersItem[];
    showcaseItems: ShowcaseItem[];
    disclaimers: string[];
}

const Stats = ({ showcaseItems, numberItems, disclaimers }: StatsProps) => {

    return (
        <div className={classNames(styles.wrapper, 'module-wrapper', 'padding-block')}>

            <Numbers items={numberItems} />
            <Showcase items={showcaseItems} />

            <div className={styles.disclaimers}>
                {disclaimers.map((disclaimer, index) => (
                    <Paragraph key={index} className={styles.disclaimer}>{disclaimer}</Paragraph>
                ))}
            </div>
        </div>
    );
};

export default Stats;