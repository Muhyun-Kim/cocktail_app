import NavBar from "../components/NavBar";

interface AppProps {
  pageProps: { [key: string]: any };
  Components: any;
}

export default function APP({ Components, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Components {...pageProps} />
    </>
  );
}
