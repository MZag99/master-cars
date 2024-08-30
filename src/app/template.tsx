'use client';

import usePage from '@/hooks/usePage';
import useBrowser from '@/hooks/useBrowser';

export default function Template({ children }: { children: React.ReactNode }) {
    useBrowser();
    usePage();

    return children;
}
