import {useEffect, useState} from 'react'
import  Styles from './Navbar.module.css';
import logo from './../../../assets/logo.png'
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";


function Navbar(props) {

    const [showNavbar, setShowNavbar] = useState(true)
    const location = useRouter()
    console.log("LOCATION " + location.pathname)
    useEffect(() => {
        if (location.pathname === '/projektid' || location.pathname === '/teenused' || location.pathname === '/kontakt' ||  location.pathname === '/tehnika' || location.pathname === '/kakumae-sadam' || location.pathname === '/meist'){
            setShowNavbar(false)
        } else {
            setShowNavbar(true)
        }
    }, [location])


    // adding the states
    const [isActive, setIsActive] = useState(false);


    //add the active class
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };


    //clean up function to remove the active class
    const removeActive = () => {
        setIsActive(false)
    }

    return (
        <nav className={Styles.navbar} style={{position: !showNavbar ? 'relative' : '', backgroundColor: !showNavbar ? '#242424' : 'transparent', }}>

            <div className={Styles.nav_content}>
                <Link href='/' className={Styles.logo}><Image src={logo} alt=""/></Link>


                <ul className={`${Styles.navMenu} ${isActive ? Styles.active : ''}`}>
                    <li onClick={removeActive}>
                        <Link href='/' className={Styles.navLink} >Esileht</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link href='/teenused' className={Styles.navLink} >Teenused</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link href='/projektid' className={Styles.navLink}>Tehtud töö</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link href='/meist' className={Styles.navLink}>Firmast</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link href='/tehnika' className={Styles.navLink}>Meie tehnika</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link href='/kontakt' className={Styles.navLink}>Kontakt</Link>
                    </li>
                </ul>


                <div className={`${Styles.hamburger} ${isActive ? Styles.active : ''}`}  onClick={toggleActiveClass}>
                    <span className={Styles.bar}></span>
                    <span className={Styles.bar}></span>
                    <span className={Styles.bar}></span>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;