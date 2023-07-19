import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Styles from './ContactForm.module.css'
import AOS from "aos";


const ContactForm = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.withCredentials = true;
        e.preventDefault();

        try {
            const response = await axios.post(' http://127.0.0.1:8000/api/contact', {
                name,
                email,
                message,
            });
            console.log(response.data); // Optional: Log the response from the Django backend
            setSubmitted(true);
        } catch (error) {
            console.error(error);
        }
    };



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
                        <div className={Styles.appContact}>KONTAKT INFO : +372 501 2509</div>
                    </div>
                    <div className={Styles.screenBodyItem}>
                        <form className={Styles.appForm} onSubmit={handleSubmit} method="POST">
                            <div className={Styles.appFormGroup}>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={Styles.appFormControl} placeholder="NIMI"/>
                            </div>
                            <div className={Styles.appFormGroup}>
                                <input  type="email" value={email}  onChange={(e) => setEmail(e.target.value)} className={Styles.appFormControl} placeholder="EMAIL"/>
                            </div>
                            <div className={`${Styles.appFormGroup} ${Styles.message}`}>
                                <input value={message} onChange={(e) => setMessage(e.target.value)} className={Styles.appFormControl} placeholder="SÕNUM"/>
                            </div>
                            <div className={`${Styles.appFormGroup} ${Styles.buttons}`}>
                                <button type="submit" className={Styles.appFormButton}>SAADA</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm