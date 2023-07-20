import React from 'react'
import Styles from './Partners.module.css'
import "aos/dist/aos.css";
import Image from "next/image";


const Partners = (props) => {

    let partnersElements = props.state.map((partner, index) =>
        <div className={Styles.partners} data-aos="zoom-in" key={index}>
            <Image className={Styles.partnerLogo} src={partner.logo} alt=""/>
        </div>
    )


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