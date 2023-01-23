/**
 * Author : muhyun-kim
 * Modified : 2023/01/23
 * Function : レイアウト
 */

import NavBar from "../components/NavBar";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
