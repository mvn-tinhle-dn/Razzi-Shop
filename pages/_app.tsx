import "../assets/scss/styles.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import TopBar from "../layouts/Topbar";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "../store";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function MyApp({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 34,
      }}
      spin
    />
  );
  return (
    <>
      <Provider store={store}>
        <PersistGate
          loading={<Spin indicator={antIcon} />}
          persistor={persistor}
        >
          <TopBar />
          <Header />
          <main className="main">
            <Component {...pageProps} />
          </main>
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
