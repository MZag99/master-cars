import type { TextProps } from '@/components/organisms/Text/Text';

// Fotki do modułu Tekstowego w sekcji Proces:
// ściezka do fotek aut: '@/assets/images/cars/[NAZWA_PLIKU]'
import DodgeImage from '@/assets/images/cars/dodge-challenger-2015.jpg';

export const CMS = {
    PROCESS_TEXT_MODULE: {
        heading: {
            title: 'Proces importu<br/>naszych aut',
            subtitle: 'Zobacz jak wygląda nasz proces importu aut z USA i Kanady.'
        },
        items: [
            {
                type: 'text',
                text: 'Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady. <br/>Mauris id tortor nec ex consequat suscipit. Mauris id tortor nec ex consequat suscipit et eget elit. In non fermentum nunc. Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady.  Mauris id tortor nec ex consequat suscipit Mauris id tortor nec ex consequat suscipit et eget elit. In non fermentum nunc. Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus.'
            },
            {
                type: 'warning',
                text: 'Z dniem 19.06.2024 wzrosły stawki opłat jakichśtam od samochodów takich i takich.'
            },
            {
                type: 'text',
                text: 'Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady. Mauris id tortor nec ex consequat suscipit. Mauris id tortor nec ex consequat suscipit et eget elit. In non fermentum nunc. Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady.  Mauris id tortor nec ex consequat suscipit Mauris id tortor nec ex consequat suscipit et eget elit. In non fermentum nunc. Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus.'
            },
            {
                type: 'image',
                image: DodgeImage,
                caption: 'Tak wygląda auto na parkingu w USA.',
                alt: 'Dodge Challenger 2015'
            },
            {
                type: 'text',
                text: 'Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady. <br/>Mauris id tortor nec ex consequat suscipit. Mauris id tortor nec ex consequat suscipit et eget elit. In non fermentum nunc. Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady.  Mauris id tortor nec ex consequat suscipit Mauris id tortor nec ex consequat suscipit et eget elit. In non fermentum nunc. Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus.'
            }
        ],
        button: {
            children: 'Tracking',
            variant: 'accent',
            disclaimer: 'Sprawdź status swojego zamówienia',
            big: true,
            icon: 'arrowUp'
        }
    } as TextProps
};