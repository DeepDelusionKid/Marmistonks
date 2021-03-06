import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/index.css'
import '../styles/App.css'
import '../styles/Animations.css'

function MyApp({ Component, pageProps }){
    return <Component {...pageProps} />
}

export default MyApp