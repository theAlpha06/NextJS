import Head from 'next/head';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Filtered Events</title>
        <meta name='description' content={`All events for ${numMonth}/${numYear}`} />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />  {/*this is where the page content is rendered */}
    </Layout>
  );
}

export default MyApp;
