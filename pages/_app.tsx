import "../assets/scss/styles.scss";
import type { AppProps } from "next/app";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import TopBar from "../layouts/Topbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopBar />
      <Header />
      <main className="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
