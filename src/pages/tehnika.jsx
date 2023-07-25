import React from 'react'
import state from "@/state";
import EquipmentContent from "@/components/Equipment/EquipmentContent/EquipmentContent";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";


const Tehnika = (props) => {
    const { t } = useTranslation('common')


    return(
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="author" content="Filsi"/>
                <meta name="description" content="Tutvuge meie laia valikuga ehitustehnikaga! Meie ettevõttel on suur tehnika park, mis hõlmab mitmesugust ehitustehnikat. Uurige lähemalt meie kasutatavaid seadmeid ja ressursse, mis võimaldavad meil täita erinevaid elektritööde projekte."/>
                <meta name="keywords" content="ehitustehnika, tehnika park, elektritööde seadmed, ehitusmasinad, ressursid"/>
                    <title>Filsi - Ehitustehnika</title>
            </Head>
            <MainLayout>
                <div>
                    <EquipmentContent state={t('equipment.0', {returnObjects: true})} eqImg={props.state.equipment[0]}/>
                </div>
            </MainLayout>
        </>
    )
}

export default Tehnika


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