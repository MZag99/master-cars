import classNames from 'classnames';

import Mail from '@/assets/svg/mail.svg';
import Phone from '@/assets/svg/phone.svg';
import Logo from '@/assets/svg/logo-new.svg';
import Picture from '@/assets/svg/picture.svg';
import Warning from '@/assets/svg/warning.svg';
import Otomoto from '@/assets/svg/otomoto.svg';
import ArrowUp from '@/assets/svg/arrow-up.svg';
import Download from '@/assets/svg/download.svg';
import Facebook from '@/assets/svg/facebook.svg';
import WhatsApp from '@/assets/svg/whatsapp.svg';
import Instagram from '@/assets/svg/instagram.svg';
import Chevron from '@/assets/svg/chevron-down.svg';

export type IconProps = {
    name: keyof typeof icons;
    className?: string;
};

export const icons = {
    logo: Logo,
    mail: Mail,
    phone: Phone,
    otomoto: Otomoto,
    chevron: Chevron,
    picture: Picture,
    warning: Warning,
    arrowUp: ArrowUp,
    download: Download,
    facebook: Facebook,
    whatsApp: WhatsApp,
    instagram: Instagram
};

const Icon = ({ name, className }: IconProps): JSX.Element | null => {

    const IconComponent = icons[name];

    if (!IconComponent) return null;

    return <IconComponent className={classNames(`svg-${name}`, className)} />;
};

export default Icon;