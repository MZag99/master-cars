import { CMS } from '@/cms/tracking';
import { CMS_UNIVERSAL } from '@/cms/universal';

import Text from '@/components/organisms/Text/Text';
import Socials from '@/components/partials/Socials/Socials';
import Vendors from '@/components/organisms/Vendors/Vendors';

export default function Tracking() {
    return (
        <article>
            <Text {...CMS.PROCESS_TEXT_MODULE} />
            <Vendors {...CMS.VENDORS_MODULE} />

            <Socials {...CMS_UNIVERSAL.SOCIALS} isHiding />
        </article>
    );
}
