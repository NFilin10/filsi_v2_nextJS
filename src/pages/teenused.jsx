import React from 'react'
import state from "@/state";
import ServicesContent from "@/components/Services/ServicesContent/ServicesContent";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";


const Teenused = (props) => {

    const { t } = useTranslation('common')


    return(
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="author" content="Filsi"/>
                <meta name="description" content="Avastage meie kvaliteetsed elektrimontaažiteenused! Pakume mitmesuguseid teenuseid, sealhulgas välisvõrkude ehitus, sisetööd, kontaktvõrgu ehitus, kaevetööd, alajaamade ehitus, käit, projekteerimine ja ehitustööd. Lugege lähemalt meie teenuste kohta ja kuidas saame teid aidata elektrivajaduste rahuldamisel."/>
                <meta name="keywords" content="elektrimontaažiteenused, välisvõrkude ehitus, sisetööd, kontaktvõrgu ehitus, kaevetööd, alajaamade ehitus, käit, projekteerimine, ehitustööd"/>
                <title>Filsi - Teenused</title>
            </Head>
            <MainLayout>
                <div>
                    <ServicesContent  state={t('home.0', {returnObjects: true})} images={props.state.home[0].services}/>
                </div>
            </MainLayout>
        </>
    )
}

export default Teenused


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