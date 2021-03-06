// This App component is the top-level component which will be common across all the different pages
// this will be useful to load global css, for example
// You need to restart the dev server after adding this file
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}