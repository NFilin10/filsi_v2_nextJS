import React from 'react'
import Styles from './Footer.module.css'
import logo from "../../../assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import {useTranslation} from "next-i18next";


const Footer = () => {

    const { t } = useTranslation('common');


    return (
        <footer className={Styles.footerWrapper}>
            <div className={Styles.footerContent}>
                <Link href='/' className={Styles.logo}><Image src={logo} alt=""/></Link>
                <ul className={Styles.fastLinksList}>
                    <li>
                        <Link href='/' >{t('navbar.link1')}</Link>
                    </li>
                    <li>
                        <Link href='/teenused'>{t('navbar.link2')}</Link>
                    </li>
                    <li>
                        <Link href='/projektid' >{t('navbar.link3')}</Link>
                    </li>
                    <li>
                        <Link href='/meist' >{t('navbar.link4')}</Link>
                    </li>
                    <li>
                        <Link href='/tehnika' >{t('navbar.link5')}</Link>
                    </li>
                    <li>
                        <Link href='/kontakt' >{t('navbar.link6')}</Link>
                    </li>
                </ul>

                <ul className={Styles.shortInfo}>
                    <li>{t('footer.address')}</li>
                    <li>{t('footer.phone')}</li>
                    <li> {t('footer.email')}</li>
                </ul>

            </div>
        </footer>
    )
}

export default Footer