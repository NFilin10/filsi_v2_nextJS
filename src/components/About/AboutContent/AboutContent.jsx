import React from 'react'
import Styles from './AboutConent.module.css'
import aboutImg from "../../../assets/aboutImg.jpg"
import Image from "next/image";
import PageHeading from "@/components/common/PageHeading/PageHeading";

const AboutContent = (props) => {
    return(
        <div className={Styles.abouWrapper}>
           <PageHeading state={props.state.pageInfoAbout[0]}/>
            <div className={Styles.aboutContent}>
                <div className={Styles.textInfo}>
                    <h2>
                        ELEKTRIEHITUSE TUNNUSTATUD LIIDER
                    </h2>
                    <p>
                        Filsi OÜ on Eesti elektrifirma, mis asutati 1997. aastal. Ettevõte spetsialiseerub elektrimontaažitöödele ning pakub mitmesuguseid teenuseid. Nende teenuste hulka kuuluvad välisvõrkude ehitus, sisetööd, kontaktvõrgu ehitus, kaevetööd, alajaamade ehitus, käit, projekteerimine ja ehitustööd. Filsi OÜ-l on muljetavaldav tehnika park, mis hõlmab suurt hulka ehitustehnikat.
                        Firma on läbi viinud mitmeid märkimisväärseid projekte, sealhulgas Kakumäe Sadam, Module Tech, Eesti Traat ja Favor. Need suurprojektid on aidanud Filsi OÜ-l tugevdada oma mainet ja kogemust elektrimontaaži valdkonnas.
                        Filsi OÜ on tuntud oma professionaalse ja usaldusväärse teeninduse poolest ning neil on kogenud meeskond, kes suudab kvaliteetselt täita erinevaid elektritööde projekte. Ettevõtte eesmärk on pakkuda klientidele parimat võimalikku lahendust nende elektrivajaduste rahuldamiseks ning tagada elektrisüsteemide ohutus ja usaldusväärsus.
                    </p>
                </div>
                <div className={Styles.img}>
                    <Image src={aboutImg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default AboutContent