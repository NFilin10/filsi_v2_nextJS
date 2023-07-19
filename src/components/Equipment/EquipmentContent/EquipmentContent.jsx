import React, {useEffect} from 'react'
import Popup from 'reactjs-popup';
import Styles from "./EquipmentContent.module.css";
import AOS from "aos";
import Image from "next/image";
import {useRouter} from "next/router";
import PageHeading from "@/components/common/PageHeading/PageHeading";

const EquipmentContent = (props) => {


    const location = useRouter();

    // Check if the current URL matches the "/other" route
    const equipmentPage = location.pathname === '/tehnika';

    // Set the body background color based on the URL
    useEffect(() => {
        document.body.style.backgroundColor = equipmentPage ? '#2d2d2d' : 'white';

        // Clean up the effect when the component unmounts
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [equipmentPage]);


    let equpmentElement = props.state.equipmentInfo.map((equipment, index) =>


        <Popup key={index} trigger=
                   {<div className={Styles.equipment}  data-aos="fade-down" data-aos-duration="1800">
                       <Image className={Styles.equipmentImg} src={equipment.equipmentImg} alt=""/>
                       <div className={Styles.equipmentDescription}>
                           <div className={Styles.equipmentName}>{equipment.equipmentName}</div>
                       </div>
                   </div>}
               modal nested>
            {
                close => (
                    <div className={Styles.modal}>
                        <div className={Styles.content}>
                            <Image className={Styles.equipmentImgModal} src={equipment.equipmentImg} alt=""/>
                            <div className={Styles.equipmentDescriptionModal}>
                                <div>{equipment.equipmentName}</div>
                                <p>{equipment.equipmentDesc}</p>
                            </div>
                        </div>
                        {/*<div>*/}
                        {/*    <button onClick=*/}
                        {/*                {() => close()}>*/}
                        {/*        Close modal*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                )
            }
        </Popup>


    )

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className={Styles.equipmentsContainer}>
            <PageHeading state={props.state.pageInfoEquipment[0]}/>
            <div className={Styles.equipments}>
                {equpmentElement}
            </div>

        </div>
    )
}

export default EquipmentContent