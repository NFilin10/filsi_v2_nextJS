
import React, {useEffect} from 'react'
import Styles from './ContactContent.module.css'
import {useRouter} from "next/router";
import Image from "next/image";
import PageHeading from "@/components/common/PageHeading/PageHeading";


const ContactContent = (props) => {

    const location = useRouter();

    // Check if the current URL matches the "/other" route
    const contactPage = location.pathname === '/kontakt';

    // Set the body background color based on the URL
    useEffect(() => {
        document.body.style.backgroundColor = contactPage ? '#2d2d2d' : 'white';

        // Clean up the effect when the component unmounts
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [contactPage]);


    let contactElement = props.state.contactInfo.map((contact, index) =>
            <div className={Styles.contactAddress} key={index}>
                <div className={Styles.imageWrapper}>
                    <Image src={contact.icon} alt=""/>
                </div>
                <div className={Styles.details}>
                    <h5>{contact.heading}</h5>
                    <p>{contact.midInfo}</p>
                    <p className={Styles[contact.className]}>{contact.lowInfo}</p>
                </div>
            </div>
    )


    return(
        <div className={Styles.contactsContainer}>
           <PageHeading state={props.state.pageInfoContact[0]}/>
            <div className={Styles.contactContent}>
                {contactElement}

            </div>
        </div>
    )
}

export default ContactContent