import classNames from 'classnames';

import Mail from '@/assets/svg/mail.svg';
import Close from '@/assets/svg/close.svg';
import Phone from '@/assets/svg/phone.svg';
import DHL from '@/assets/svg/dhl-logo.svg';
import Logo from '@/assets/svg/logo-new.svg';
import Picture from '@/assets/svg/picture.svg';
import Warning from '@/assets/svg/warning.svg';
import Otomoto from '@/assets/svg/otomoto.svg';
import ArrowUp from '@/assets/svg/arrow-up.svg';
import Download from '@/assets/svg/download.svg';
import Facebook from '@/assets/svg/facebook.svg';
import WhatsApp from '@/assets/svg/whatsapp.svg';
import Instagram from '@/assets/svg/instagram.svg';
import Hamburger from '@/assets/svg/hamburger.svg';
import Chevron from '@/assets/svg/chevron-down.svg';
import CloseThin from '@/assets/svg/close-thin.svg';
import Searates from '@/assets/svg/searates-logo.svg';

export type IconProps = {
    name: keyof typeof icons;
    className?: string;
};

export const icons = {
    dhl: DHL,
    close: Close,
    'close-thin': CloseThin,
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
    whatsapp: WhatsApp,
    searates: Searates,
    instagram: Instagram,
    hamburger: Hamburger
};

const Icon = ({ name, className }: IconProps): JSX.Element | null => {

    const IconComponent = icons[name];

    if (!IconComponent) return null;

    return <IconComponent className={classNames(`svg-${name}`, className)} />;
};

export default Icon;