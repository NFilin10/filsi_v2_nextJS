import Navbar from "@/components/common/Navbar/Navbar";

import {useLocation} from "react-router-dom";
import React, {useEffect} from 'react'
import Header from "@/components/Home/Header/Header";
import Services from "@/components/Home/Services/Services";
import Partners from "@/components/Home/Partners/Partners";
import AboutProjects from "@/components/Home/AboutProjects/AbooutProjects"
import {useRouter} from "next/router";
import state from '../state'
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";


export const metadata = {
    title: 'test',
    description: '...',
}


function Home({props}) {
    const propsObj = JSON.parse(props)




    const location = useRouter();

    // Check if the current URL matches the home page
    const isHomePage = location.pathname === '/';

    // Set the body background color based on the URL
    // eslint-disable-next-line no-undef
    useEffect(() => {
        document.body.style.backgroundColor = isHomePage ? 'white' : '#2d2d2d';

        // Clean up the effect when the component unmounts
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [isHomePage]);




    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Tere tulemast meie kodulehele! Pakume kvaliteetseid elektrimontaažiteenuseid ja ehitustöid. Välisvõrkude ehitus, sisetööd, kontaktvõrgu ehitus ja palju muud. Tutvuge meie teenustega ja võtke meiega ühendust!"/>
                <meta name="keywords" content="elektrimontaaž, ehitustööd, välisvõrkude ehitus, sisetööd, kontaktvõrgu ehitus"/>
                <meta name="author" content="Filsi"/>
                <title>Filsi - Kvaliteetsed Elektrimontaažiteenused</title>
            </Head>
            <MainLayout>
                <div className="homeWrapper">
                    <Header state={propsObj.home[0].swiper}/>
                    <Services  state={propsObj.home[0].services}/>
                    <AboutProjects state={propsObj.home[0].projects}/>
                    <Partners state={propsObj.home[0].partners}/>
                </div>
            </MainLayout>
        </>


    );
}

export default Home;

export async function getStaticProps() {
    const props = JSON.stringify(state)
    return {
        props: {
            props
        }
    };
}