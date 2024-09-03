import { CMS } from '@/cms/about';
import { CMS_UNIVERSAL } from '@/cms/universal';

import Hero from '@/components/organisms/Hero/Hero';
import Text from '@/components/organisms/Text/Text';
import Stats from '@/components/organisms/Stats/Stats';
import Socials from '@/components/partials/Socials/Socials';

export default function Home() {

    return (
        <article>
            <Hero {...CMS.HERO} />
            <Text {...CMS.ABOUT_TEXT_MODULE} />
            <Stats {...CMS.STATS} />
            <Text {...CMS.TRACKING_TEXT_MODULE} />
            <Socials {...CMS_UNIVERSAL.SOCIALS} isHiding />
        </article>
    );
}
