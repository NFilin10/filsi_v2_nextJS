import React from 'react'
import state from "@/state";
import ServicesContent from "@/components/Services/ServicesContent/ServicesContent";
import MainLayout from "@/layouts/MainLayout";

const Teenused = ({props}) => {

    const propsObj = JSON.parse(props)


    return(
        <MainLayout>
            <div>
                <ServicesContent state={propsObj.home[0]}/>
            </div>
        </MainLayout>

    )
}
export default Teenused

export async function getStaticProps() {
    const props = JSON.stringify(state)
    return {
        props: {
            props
        }
    };
}