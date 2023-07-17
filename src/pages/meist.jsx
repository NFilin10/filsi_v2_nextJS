import React from 'react'
import AboutContent from "@/components/About/AboutContent/AboutContent";
import state from "@/state";
import MainLayout from "@/layouts/MainLayout";

const Meist = ({props}) => {

    const propsObj = JSON.parse(props)

    return(
        <MainLayout>
            <div>
                <AboutContent state={propsObj.about[0]}/>
            </div>
        </MainLayout>

    )
}

export default Meist


export async function getStaticProps() {
    const props = JSON.stringify(state)
    return {
        props: {
            props
        }
    };
}