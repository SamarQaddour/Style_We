import Head from "next/head";
import Script from "next/script";
import "../styles/Forminput.css";
import "../styles/Navbar.css";
import '../styles/globals.css';
import '../styles/catgories.css';
import '../styles/main.css';
import '../styles/modal.css';
import Layout from "../components/Layout";
import store from "../redux/app/store";
import {Provider} from "react-redux";

function MyApp({ Component, pageProps }) {
  ({
    Component,
    pageProps: {...pageProps }
  })


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"/>
    <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </Provider>


    </>
  )
}


export default MyApp;
