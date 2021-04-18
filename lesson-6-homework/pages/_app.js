import '../styles/globals.css'
import '../styles/sideBar.css'
import '../styles/contentpane.css'
import '../styles/footer.css'
import SideBar from '../components/siderBar'
import Contentpane from '../components/contentpane'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />

  return(
    <>
     <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
    `}</style>
      <main>
      <SideBar></SideBar>
      <Contentpane></Contentpane>
      </main>
      <Footer></Footer>
   
    </>
  )
}

export default MyApp
