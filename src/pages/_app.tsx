import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { Cinzel } from 'next/font/google';

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
  return (
    <main className={`${clashDisplayFont.variable} ${cinzelFont.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
