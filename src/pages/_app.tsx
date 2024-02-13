import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { Cinzel } from 'next/font/google';
import Header from '@/components/Header';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Transition from '@/components/Transition';

const cinzelFont = Cinzel({
  variable: '--cinzel-font',
  weight: ['400', '700'],
  subsets: ['latin'],
});

const clashDisplayFont = localFont({
  variable: '--clash-display-font',
  display: 'swap',
  src: [
    {
      path: '../fonts/ClashDisplay-Variable.ttf',
      weight: 'variable',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait" key={router.pathname}>
      <motion.div>
        <main className={`${clashDisplayFont.variable} ${cinzelFont.variable}`}>
          <Header />
          <Component {...pageProps} />
        </main>

        <Transition className={`${cinzelFont.variable}`} />
      </motion.div>{' '}
    </AnimatePresence>
  );
}
