import Hero from '@/components/organisms/Hero/Hero';

export default function Home() {
    return (
        <main>
            <Hero
                title='Sprowadzimy dla Ciebie Twoje <strong>wymarzone auto</strong>'
                subtitle='Import samochodów ze Stanów Zjednoczonych w korzystnych cenach.'
                imageUrl='/images/hero.jpg'
            />
        </main>
    );
}
