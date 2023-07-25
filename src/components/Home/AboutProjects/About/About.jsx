import React, {useEffect} from 'react'
import Styles from './About.module.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const About = ({state}) => {

    return(
        <div className={Styles.aboutContent}>
            <div className={Styles.headingSection}>
                <h6 data-aos="fade-right" data-aos-duration="1500">
                    {state.upperHeading}
                </h6>
                <h2 data-aos="fade-right" data-aos-duration="1500">{state.mainHeading}</h2>
            </div>
            <div className={Styles.aboutSection}>
                <div className={Styles.aboutSectionContent}>
                    <p data-aos="fade-left" data-aos-duration="1500">
                        {state.about}
                    </p>
                    <button className={Styles.allProjectsBtn} data-aos="fade-left" data-aos-duration="1500">
                        <Link href="/projektid">{state.btnText}</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About