import React from 'react'
import state from "@/state";
import {useRouter} from "next/router";
import Head from "next/head";
import Index from "src/components/SpecProjectContent";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";



const Id = (props) => {

    const params = useRouter()

    let id = 0
    for (const object of state.home[0].projects) {
        if (object.url === params.query.id){
            break
        }
        id++
    }

    const { t } = useTranslation('common')


    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="author" content="Filsi"/>
                <title>{state.home[0].projects[id].name}</title>
                <meta name="description" content={state.home[0].projects[id].projectDescription}/>
                <meta name="keywords" content="objekt, ehitustööd, projekt"/>
            </Head>
            <div>
                <Index state={t('projectPage.0', {returnObjects: true})} project={state.home[0].projects[id]}/>
            </div>
        </>

    )
}
export default Id


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


export async function getStaticPaths() {
    const locales = ['en', 'et']; // List of supported locales

    // Generate paths for each locale and dynamic page
    const paths = locales.flatMap((locale) =>
        state.home[0].projects.map((project) => ({
            params: {id: project.url},
            locale, // Add the locale to the path object
        }))
    );

    return {paths, fallback: false};
}