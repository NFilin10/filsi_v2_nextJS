import React from 'react'
import SwiperComp from "./Swiper/Swiper";





const Header = (props) => {

    return (
        <header>
            <SwiperComp state={props.state} images={props.images}/>
        </header>



    );
}


export default Header;