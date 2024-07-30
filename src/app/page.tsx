import { CMS } from '@/cms/all';

import Hero from '@/components/organisms/Hero/Hero';
import Text from '@/components/organisms/Text/Text';
import Stats from '@/components/organisms/Stats/Stats';
import Socials from '@/components/partials/Socials/Socials';

export default function Home() {
    return (
        <main>
            <Hero {...CMS.HERO} />
            <Text {...CMS.ABOUT} />
            <Stats {...CMS.STATS} />
            <Socials />
        </main>
    );
}
