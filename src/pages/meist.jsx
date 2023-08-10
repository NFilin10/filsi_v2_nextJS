import React from 'react'
import AboutContent from "@/components/About/AboutContent/AboutContent";
import state from "@/state";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";


const Meist = () => {
    const { t } = useTranslation('common')


    return(
        <>
            <Head>
                <meta name="description" content={t('about.0.seo.0.description', {returnObjects: true})}/>
                <meta name="keywords" content={t('about.0.seo.0.keywords', {returnObjects: true})}/>
                <title>{t('about.0.seo.0.title', {returnObjects: true})}</title>
            </Head>
            <MainLayout>
                <div>
                    <AboutContent state={t('about.0', {returnObjects: true})}/>
                </div>
            </MainLayout>

        </>


    )
}

export default Meist


export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
            ])),

        },
    }
}