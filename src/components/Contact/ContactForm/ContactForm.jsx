import React, {useEffect} from 'react'

import Styles from './ContactForm.module.css'
import AOS from "aos";

const ContactForm = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return(
        <div className={Styles.container} data-aos="zoom-in-up" data-aos-duration="1000">
            <div className={Styles.screen}>
                <div className={Styles.screenHeader}>
                    <div className={Styles.screenHeaderLeft}>
                        <div className={`${Styles.screenHeaderButton} ${Styles.close}`}></div>
                        <div className={`${Styles.screenHeaderButton} ${Styles.maximize}`}></div>
                        <div className={`${Styles.screenHeaderButton} ${Styles.minimize}`}></div>
                    </div>
                    <div className={Styles.screenHeaderRight}>
                        <div className={Styles.screenHeaderEllipsis}></div>
                        <div className={Styles.screenHeaderEllipsis}></div>
                        <div className={Styles.screenHeaderEllipsis}></div>
                    </div>
                </div>
                <div className={Styles.screenBody}>
                    <div className={`${Styles.screenBodyItem} ${Styles.left}`}>
                        <div className={Styles.appTitle}>
                            <span>KIRJUTAGE</span>
                            <span>MEILE</span>
                        </div>
                        <div className={Styles.appContact}>KONTAKT INFO : +62 81 314 928 595</div>
                    </div>
                    <div className={Styles.screenBodyItem}>
                        <form className={Styles.appForm}>
                            <div className={Styles.appFormGroup}>
                                <input className={Styles.appFormControl} placeholder="NIMI"/>
                            </div>
                            <div className={Styles.appFormGroup}>
                                <input className={Styles.appFormControl} placeholder="EMAIL"/>
                            </div>
                            <div className={`${Styles.appFormGroup} ${Styles.message}`}>
                                <input className={Styles.appFormControl} placeholder="SÕNUM"/>
                            </div>
                            <div className={`${Styles.appFormGroup} ${Styles.buttons}`}>
                                <button className={Styles.appFormButton}>SAADA</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm