import React from 'react'
import AboutContent from "@/components/About/AboutContent/AboutContent";
import state from "@/state";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";


const Meist = (props) => {

    return(
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="author" content="Filsi"/>
                <title>Filsi - Meie Ettevõte</title>
                <meta name="description" content="Tutvuge meiega lähemalt! Oleme 1997. aastal asutatud elektrimontaažifirma, kes pakub kvaliteetseid ja usaldusväärseid teenuseid. Meie meeskonnal on laialdased kogemused välisvõrkude ehituses, sisetöödes, kontaktvõrgu ehituses ja palju muus. Lugege meie ettevõtte ajaloo ja oskusteabe kohta ning kuidas saame teid aidata."/>
                <meta name="keywords" content="meie ettevõte, elektrimontaaž, välisvõrkude ehitus, sisetööd, kontaktvõrgu ehitus, ajalugu, oskusteave"/>
            </Head>
            <MainLayout>
                <div>
                    <AboutContent state={props.about[0]}/>
                </div>
            </MainLayout>

        </>


    )
}

export default Meist


export async function getStaticProps() {
    return {
        props: state

    };
}