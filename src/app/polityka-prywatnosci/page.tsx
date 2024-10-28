import { CMS } from '@/cms/privacy-policy';
// import { CMS_UNIVERSAL } from '@/cms/universal';

import Text from '@/components/organisms/Text/Text';
// import Socials from '@/components/partials/Socials/Socials';

export default function PrvacyPolicy() {

    return (
        <article>
            <Text {...CMS.PROCESS_TEXT_MODULE} />
            {/* <Socials {...CMS_UNIVERSAL.SOCIALS} isHiding /> */}
        </article>
    );
}
