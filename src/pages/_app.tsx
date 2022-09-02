import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { Header } from '@components/layout';

import '@style/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="light">
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
