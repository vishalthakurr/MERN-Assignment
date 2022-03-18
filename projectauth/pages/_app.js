import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import Fotter from './component/Fotter'
import Navbar from './component/Navbar'
import UserState from './context/UserState'

function MyApp({ Component, pageProps }) {
  return <>

    <Navbar />

    <UserState>

      <Component {...pageProps} />
    </UserState>
    <Fotter />

  </>
}

export default MyApp
