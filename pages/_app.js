import '../styles/globals.css'
import Header from '../components/Header';
import Cursor from '../components/dependency/Cursor';
import '../styles/cursor.css';
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return <>
   <NextNProgress />
    <Header />
    <Component {...pageProps} />
    <Cursor />
    <div id="menu-modal"></div>
    <div id="notification"></div>
  </>
}

export default MyApp;
