import React, {useEffect} from 'react'
import Styles from './About.module.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return(
        <div className={Styles.aboutContent}>
            <div className={Styles.headingSection}>
                <h6 data-aos="fade-right" data-aos-duration="1500">
                    Suurimad projektid
                </h6>
                <h2 data-aos="fade-right" data-aos-duration="1500">ÜLE <span>25 AASTA</span> OLEME <span>TEIE</span> USALDUSVÄÄRNE ELEKTRIFIRMA</h2>
            </div>
            <div className={Styles.aboutSection}>
                <div className={Styles.aboutSectionContent}>
                    <p data-aos="fade-left" data-aos-duration="1500">
                        Filsi OÜ on Eesti elektrifirma, asutatud 1997. aastal. Me tegeleme elektrimontaažitöödega, pakkudes välisvõrkude ehitust, sisetöid, kontaktvõrgu ehitust, kaevetöid, alajaamade ehitust, käit, projekteerimist ja ehitustöid. Filsi OÜ-l on suur tehnika park ning olulised projektid hõlmavad Kakumäe Sadamat, Module Tech'i, Eesti Traati ja Favorit. Meie oleme tuntud professionaalse teeninduse poolest, pakkudes usaldusväärseid elektritöid ja tagades elektrisüsteemide ohutuse ning usaldusväärsuse.
                    </p>
                    <button className={Styles.allProjectsBtn} data-aos="fade-left" data-aos-duration="1500">
                        <Link href="/projektid">Kõik projektid</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About