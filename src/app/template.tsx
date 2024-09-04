'use client';

import { AnimatePresence, motion } from 'framer-motion';

import usePage from '@/hooks/usePage';
import useBrowser from '@/hooks/useBrowser';
import { useLightbox } from '@/store/useGlobalStore';
import classNames from 'classnames';
import { useEffect } from 'react';

const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 1 } },
    exit: { opacity: 0 }
};

export default function Template({ children }: { children: React.ReactNode }) {

    useBrowser();
    usePage();

    return (
        <AnimatePresence>
            <motion.main {...variants}>
                {children}
            </motion.main>
        </AnimatePresence>
    );
}
