
import '../styles/global.css';
import '../styles/SwiperComp.css';
import '../styles/CarouselComp.css'
import '../styles/ServicesCarousel.css'
import '../styles/PopupComp.css'
import '../styles/MapComp.css'
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'reactjs-popup/dist/index.css';
import {Analytics} from "@vercel/analytics/react";
import { appWithTranslation } from 'next-i18next'


function App({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: false,
            offset: 50,
        });
    }, []);

    return (
        <>
            <Component {...pageProps} />
            <Analytics />
        </>

        )

}

export default  appWithTranslation(App)