import AppLayout from 'components/layout';
import type { AppProps } from 'next/app';
import { GlobalStyle } from 'styles/global.style';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
