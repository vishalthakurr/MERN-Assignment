import '../styles/globals.css'
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
