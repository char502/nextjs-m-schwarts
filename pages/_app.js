import '../styles/globals.css';

import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* This is the page component */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
