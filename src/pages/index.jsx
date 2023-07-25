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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'


// ... (imports)

function Home(props) { // Add 'props' as an argument

    const { t } = useTranslation('common')
    const location = useRouter();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        document.body.style.backgroundColor = isHomePage ? 'white' : '#2d2d2d';

        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [isHomePage]);

    return (
        <>
            {/* ... (Head and other JSX code) */}
            <MainLayout>
                <div className="homeWrapper">
                    <Header state={t('home.0.swiper', {returnObjects: true})} images={props.state.home[0].swiper}/>
                    <Services  state={t('home.0.services', {returnObjects: true})} images={props.state.home[0].services}/>
                    <AboutProjects state={t('home.0.about', {returnObjects: true})} projects={props.state.home[0].projects}/>
                    <Partners state={t('home.0.partners', {returnObjects: true})} logos={props.state.home[0].partners}/>
                </div>
            </MainLayout>
        </>
    );
}

export default Home;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
            ])),
            state
        },
    }
}
