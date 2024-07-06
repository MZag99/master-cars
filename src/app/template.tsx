'use client';
import { motion } from 'framer-motion';

import usePage from '@/hooks/usePage';
import useBrowser from '@/hooks/useBrowser';

export default function Template({ children }: { children: React.ReactNode }) {
    useBrowser();
    usePage();

    return (
        <motion.div
            className='template'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}
