import AppLayout from 'components/layout';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { GlobalStyle } from 'styles/global.style';

declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY)) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
  }, []);
  return (
    <AppLayout>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
