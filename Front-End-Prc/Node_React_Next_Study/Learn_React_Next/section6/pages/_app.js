import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Layout>
    <header>NARAS</header>
    <Component {...pageProps} />
  </Layout>
}
