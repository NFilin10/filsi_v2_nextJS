import React from 'react'
import Navbar from "../../Common/Navbar/Navbar";
import SwiperComp from "./Swiper/Swiper";





const Header = (props) => {


    return (
        <header>



            <SwiperComp state={props.state}/>
        </header>



    );
}


export default Header;