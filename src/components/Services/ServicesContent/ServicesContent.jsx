import React, {useEffect} from 'react'
import Styles from './ServicesContent.module.css'
import {useRouter} from "next/router";
import Image from "next/image";
import PageHeading from "@/components/common/PageHeading/PageHeading";


const ServicesContent = (props) => {

    const location = useRouter();

    // Check if the current URL matches the "/other" route
    const servicePage = location.pathname === '/teenused';

    // Set the body background color based on the URL
    useEffect(() => {
        document.body.style.backgroundColor = servicePage ? '#2d2d2d' : 'white';

        // Clean up the effect when the component unmounts
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [servicePage]);


    let servicesElement = props.state.services.map((service, index) =>

        <div className={Styles.service} data-aos="flip-up"  data-aos-duration="1500" key={index}>
            <Image className={Styles.serviceImg} src={service.serviceImg} alt=""/>
            <div className={Styles.serviceDescription}>
                <h3>{service.serviceName}</h3>
                <ul>
                    {
                        service.shortDesc.map((sDesc, index) => <li key={index}>{sDesc}</li>)
                    }
                </ul>
            </div>

        </div>
    )

    return(

        <div className={Styles.servicesContainer}>
            <PageHeading state={props.state.pageInfoServices[0]}/>
            <div className={Styles.services}>
                {servicesElement}
            </div>
        </div>

    )
}

export default ServicesContent