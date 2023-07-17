import React from 'react'

import state from "@/state";
import ContactContent from "@/components/Contact/ContactContent/ContactContent";
import ContactForm from "@/components/Contact/ContactForm/ContactForm";
import MainLayout from "@/layouts/MainLayout";
const Kontakt = ({props}) => {

    const propsObj = JSON.parse(props)

    return(
        <MainLayout>
            <div>
                <ContactContent state={propsObj.contact[0]}/>
                <ContactForm/>

            </div>
        </MainLayout>

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