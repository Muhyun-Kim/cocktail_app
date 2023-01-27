/**
 * Author : muhyun-kim
 * Modified : 2023/01/23
 * Function : レイアウト
 */

import NavBar from "../components/NavBar";
import { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex flex-col">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
