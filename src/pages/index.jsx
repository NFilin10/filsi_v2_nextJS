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
        <MainLayout>
            <div className="homeWrapper">
                <Header state={propsObj.home[0].swiper}/>
                <Services  state={propsObj.home[0].services}/>
                <AboutProjects state={propsObj.home[0].projects}/>
                <Partners state={propsObj.home[0].partners}/>
            </div>
        </MainLayout>

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