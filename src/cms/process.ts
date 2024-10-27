import type { TextProps } from '@/components/organisms/Text/Text';

// Fotki do modułu Tekstowego w sekcji Proces:
// ściezka do fotek aut: '@/assets/images/cars/[NAZWA_PLIKU]'
import DodgeImage from '@/assets/images/cars/bmw/DSC_0212-min.jpg';

export const CMS = {
    PROCESS_TEXT_MODULE: {
        heading: {
            title: 'Proces importu<br/>naszych aut',
            subtitle: 'Zobacz jak wygląda nasz proces importu aut z USA i Kanady.'
        },
        items: [
            {
                type: 'text',
                text: '<strong>1. Wyszukiwanie pojazdu </strong><br/><br/>Po otrzymaniu szczegółowych informacji o poszukiwanym pojeździe, przygotowujemy dla Państwa najbardziej interesujące oferty. Po wyborze konkretnego pojazdu przez klienta przeprowadzamy bezpłatną weryfikację historii auta w raporcie Carfax. Klient określa maksymalny budżet na zakup auta z dostawą pod dom, a my zajmujemy się całą resztą.'
            },
            {
                type: 'text',
                text: '<br/><strong>2. Licytacja </strong><br/><br/>Aby wziąć udział w licytacji wymagana jest wpłata kaucji zwrotnej w wysokości 10% (kwota nie mniejsza niż 3000zł). Pojazd licytujemy do wyznaczonej kwoty, jeśli cena licytowanego pojazdu przekorczy planowany budżet, kaucja jest zwracana na konto klienta lub przeznaczona na poczet kolejnych lictyacji. Udział w licytacji jest darmowy. Po wygranej lictyacji otrzymasz dane do przelewu zagranicznego. Przelew powinien być wykonany do 2 dni roboczych po wygranej aukcji.'
            },
            {
                type: 'text',
                text: '<br/><strong>3. Transport </strong><br/><br/>Po zaksięgowaniu wpłaty za pojazd zajujemy się jego odbiorem, transportem na plac, gdzie otrzymamy dodatkowe zdjęcia. Status swojego pojazdu możesz śledzić na naszej stronie, a my zajmiemy się wszelkimi formalnościami.'
            },
            {
                type: 'text',
                text: '<br/><strong>4. Agencja celna oraz odbiór auta </strong><br/><br/>Po rozładunku pojazd poddaje się procedurze celnej. Firma spedycyjna wystawia poszczególne rachunki (CŁO, VAT, opłaty portowe)- po ich opłaceniu pojazd transportowany jest do naszej firmy bądź pod konkretny adres.'
            },
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