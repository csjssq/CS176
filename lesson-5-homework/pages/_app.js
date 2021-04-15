// import '../styles/globals.css'
import '../styles/index.css'

import Headers from '../components/headers'
import Left from '../components/left'
import Right from '../components/right'
import Center from '../components/center'
import Moredata from '../components/moredata'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (<div>
          <Headers class="top"></Headers>
           <div class="overlool">
           <Left></Left>
           < div class="center">
           <Center></Center>
           <Moredata></Moredata>
           </div>
           
           <Right></Right>
           </div>
    </div>
  )
}

export default MyApp
