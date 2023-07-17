import React from 'react'

import Styles from './Footer.module.css'
import logo from "../../../assets/logo.png";
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
    return (
        <footer className={Styles.footerWrapper}>
            <div className={Styles.footerContent}>
                <Link href='/' className={Styles.logo}><Image src={logo} alt=""/></Link>
                <ul className={Styles.fastLinksList}>
                    <li>
                        <Link href='/' >Esileht</Link>
                    </li>
                    <li>
                        <Link href='/teenused'>Teenused</Link>
                    </li>
                    <li>
                        <Link href='/projektid' >Tehtud too</Link>
                    </li>
                    <li>
                        <Link href='/meist' >Firmast</Link>
                    </li>
                    <li>
                        <Link href='/tehnika' >Meie tehnika</Link>
                    </li>
                    <li>
                        <Link href='/kontakt' >Kontakt</Link>
                    </li>
                </ul>

                <ul className={Styles.shortInfo}>
                    <li>Männiku tee 102, Tallinn 11216</li>
                    <li> Tel./Fax +372 650 3023, Mobiil +372 501 2509</li>
                    <li> E-post: filsi@filsi.ee</li>
                </ul>

            </div>
        </footer>
    )
}

export default Footer