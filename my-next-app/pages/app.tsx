import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import '../styles/global.scss';
import store from '../utils/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        title="My Next.js App"
        description="A simple Next.js application"
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
