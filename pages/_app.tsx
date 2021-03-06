import { AppProps } from 'next/app';
import '../styles/globals.css';

import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* This is the page component */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
