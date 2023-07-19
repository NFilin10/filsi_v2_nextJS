import Styles from './Services.module.css'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from "next/image";



const Services = (props) => {

    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };


    let serviceElements = props.state.map((service, index) =>
        <div className={Styles.serviceWrapper} key={index}>
            <div className={Styles.serviceImage}>
                <Image alt="" src={service.serviceImg} onDragStart={handleDragStart} role="presentation" />
            </div>
            <div className={Styles.serviceText}>
                <span className={Styles.serviceNum}>0{service.id}</span>
                <h6 className={Styles.serviceHeading}>{service.serviceName}</h6>
                <p className={Styles.serviceDescription}>{service.serviceDescription}</p>
            </div>
        </div>
    )


    return(

            <AliceCarousel
                mouseTracking items={serviceElements}
                responsive={responsive}
                controlsStrategy="alternate"

            />


    );
};


export default Services