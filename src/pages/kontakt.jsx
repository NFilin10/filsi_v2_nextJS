import React from 'react'

import state from "@/state";
import ContactContent from "@/components/Contact/ContactContent/ContactContent";
import ContactForm from "@/components/Contact/ContactForm/ContactForm";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
const Kontakt = ({props}) => {

    const propsObj = JSON.parse(props)

    return(
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="author" content="Filsi"/>
                <meta name="description" content="Võtke meiega ühendust ja küsige lisateavet elektrimontaažiteenuste kohta. Oleme siin, et aidata teil lahendada teie elektriga seotud vajadused. Täitke kontaktivorm või kasutage meie e-posti ja telefoninumbrit. Ootame teiega koostööd!"/>
                <meta name="keywords" content="kontakt, elektrimontaaž, kontaktivorm, e-post, telefon"/>
            </Head>
            <MainLayout>
                <div>
                    <ContactContent state={propsObj.contact[0]}/>
                    <ContactForm/>

                </div>
            </MainLayout>
        </>


    )
}
export default Kontakt


export async function getStaticProps() {
    const props = JSON.stringify(state)
    return {
        props: {
            props
        }
    };
}