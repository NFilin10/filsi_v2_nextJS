import React from 'react'
import Styles from './AboutConent.module.css'
import aboutImg from "../../../assets/aboutImg.jpg"
import Image from "next/image";
import PageHeading from "@/components/common/PageHeading/PageHeading";


const AboutContent = ({state}) => {
    console.log(state)
    return(
        <div className={Styles.abouWrapper}>
           <PageHeading state={state.pageInfoAbout[0]}/>
            <div className={Styles.aboutContent}>
                <div className={Styles.textInfo}>
                    <h2>
                        {state.heading}
                    </h2>
                    <div className={Styles.text}>
                        <p>
                            {state.about}
                        </p>
                    </div>
                </div>
                <div className={Styles.img}>
                    <Image src={aboutImg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default AboutContent