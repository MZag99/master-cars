import { CMS } from '@/cms/process';
import { CMS_UNIVERSAL } from '@/cms/universal';

import Text from '@/components/organisms/Text/Text';
import Socials from '@/components/partials/Socials/Socials';

export default function Process() {
    return (
        <main>
            <Text {...CMS.PROCESS} />
            <Socials {...CMS_UNIVERSAL.SOCIALS} isHiding />
        </main>
    );
}
