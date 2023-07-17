import React from 'react'
import state from "@/state";
import EquipmentContent from "@/components/Equipment/EquipmentContent/EquipmentContent";
import MainLayout from "@/layouts/MainLayout";

const Tehnika = ({props}) => {

    const propsObj = JSON.parse(props)


    return(
        <MainLayout>
            <div>
                <EquipmentContent state={propsObj.equipment[0]}/>
            </div>
        </MainLayout>

    )
}

export default Tehnika

export async function getStaticProps() {
    const props = JSON.stringify(state)
    return {
        props: {
            props
        }
    };
}