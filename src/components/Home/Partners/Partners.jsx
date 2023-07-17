import React, {useEffect} from 'react'

import Styles from './Partners.module.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";



const Partners = (props) => {


    let partnersElements = props.state.map(partner =>
        <div className={Styles.partners} data-aos="zoom-in">
            <Image className={Styles.partnerLogo} src={partner.logo} alt=""/>
            {/*<h3>{partner.name}</h3>*/}
        </div>
    )

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className={Styles.partnersWrapper}>
            <div className={Styles.partnersContent}>
                <div className={Styles.partnersHeading}>
                    <h1>Meie Partnerid</h1>
                </div>
                <div className={Styles.partnersList}>
                    {partnersElements}
                </div>

            </div>
        </div>
    )
}

export default Partners