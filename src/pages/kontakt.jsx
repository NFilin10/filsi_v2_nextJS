import React from 'react'
import state from "@/state";
import ContactContent from "@/components/Contact/ContactContent/ContactContent";
import ContactForm from "@/components/Contact/ContactForm/ContactForm";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";


const Kontakt = (props) => {

    const { t } = useTranslation('common')


    return(
        <>
            <Head>
                <meta name="description" content={t('contact.0.seo.0.description', {returnObjects: true})}/>
                <meta name="keywords" content={t('contact.0.seo.0.keywords', {returnObjects: true})}/>
                <title>{t('contact.0.seo.0.title', {returnObjects: true})}</title>
            </Head>
            <MainLayout>
                <div>
                    <ContactContent  state={t('contact.0', {returnObjects: true})} props={props.state.contact[0]}/>
                    <ContactForm state={t('contact.0.contactForm', {returnObjects: true})}/>

                </div>
            </MainLayout>
        </>


    )
}

export default Kontakt


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