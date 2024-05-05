import Web3Provider from '../Web3Provider/Web3Provider';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </>
  );
}

export default App;
