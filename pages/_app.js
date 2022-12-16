import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'
import 'antd/dist/reset.css';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Pokemon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )

}

export default MyApp
