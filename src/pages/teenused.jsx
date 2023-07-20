import React from 'react'
import state from "@/state";
import ServicesContent from "@/components/Services/ServicesContent/ServicesContent";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";


const Teenused = (props) => {

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
                    <ServicesContent state={props.home[0]}/>
                </div>
            </MainLayout>
        </>
    )
}

export default Teenused


export async function getStaticProps() {
    return {
        props: state

    };
}