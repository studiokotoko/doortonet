import '../styles/globals.css'
import Header from '../components/Header';
import Cursor from '../components/dependency/Cursor';
import '../styles/cursor.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Cursor />
    <div id="menu-modal"></div>
    <div id="notification"></div>
  </>
}

export default MyApp;
