
import state from "@/state";
import ProjectsGallery from "@/components/Projects/ProjectsGallery/ProjectsGallery";
import MainLayout from "@/layouts/MainLayout";
import dynamic from "next/dynamic";
import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import React from "react";


const Projektid = (props) => {

    const DynamicMap = dynamic(() => import("@/components/Projects/Map/Map"), {
        ssr: false,
    })

    const { t } = useTranslation('common')



    return (
        <>
            <Head>
                <meta name="description" content={t('home.0.projectsSeo.0.seo.0.description', {returnObjects: true})}/>
                <meta name="keywords" content={t('home.0.projectsSeo.0.seo.0.keywords', {returnObjects: true})}/>
                <title>{t('home.0.projectsSeo.0.seo.0.title', {returnObjects: true})}</title>
            </Head>
            <MainLayout>
                <div>
                    <ProjectsGallery state={t('home.0.pageInfoProjects.0', {returnObjects: true})} project_info={props.state.home[0]}/>
                    <DynamicMap state={t('projectPage.0', {returnObjects: true})} project_info={props.state.home[0].projects}/>
                </div>
            </MainLayout>
        </>
    );
}

export default Projektid

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