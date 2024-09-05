import type { TextProps } from '@/components/organisms/Text/Text';


export const CMS = {
    PROCESS_TEXT_MODULE: {
        heading: {
            title: 'Śledź swoje<br/>zamówienie'
        },
        items: [
            {
                type: 'text',
                text: 'Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady.<br/><br/>Mauris id tortor nec ex consequat suscipit. Mauris id tortor nec ex consequat suscipit et eget elit. In non fermentum nunc. <br/><br/>Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. <br/><br/>Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady.  Mauris id tortor nec ex consequat suscipit. Mauris id tortor nec ex consequat suscipit et eget elit. In non fermentum nunc. Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus.'
            }
        ],
        button: {
            children: 'Tracking',
            variant: 'accent',
            disclaimer: 'Sprawdź status swojego zamówienia',
            big: true,
            icon: 'arrowUp'
        }
    } as TextProps,

    VENDORS_MODULE: {
        items: [
            {
                logo: 'dhl',
                url: 'https://www.dhl.com/'
            },
            {
                logo: 'dhl',
                url: 'https://www.dhl.com/'
            }
        ]
    }
};