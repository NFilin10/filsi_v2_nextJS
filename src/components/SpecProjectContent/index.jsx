import React from 'react'
import Styles from './SpecProjectContent.module.css'
import Image from "next/image";
import MainLayout from "@/layouts/MainLayout";


const Index = (props) => {

    return (
        <MainLayout>
            <div className={Styles.wrapper}>
                <div className={Styles.header}>

                    <h1>{props.state.name ? props.state.name : ""}</h1>
                </div>
                <div className={Styles.projectImg}>
                    <Image src={props.state.img ? props.state.img : ""}
                           alt=""/>
                </div>
                <div className={Styles.content} data-aos="zoom-in-up">
                    <p className={Styles.projectInfo}>
                        {props.state.projectDescription ? props.state.projectDescription : ""}
                    </p>
                    <table className={Styles.table}>
                        <tbody className={Styles.tableBody}>
                        <tr>
                            <td className={Styles.label}>Lõpetamise kuupäev</td>
                            <td>{props.state.finishDate ? props.state.finishDate : ""}</td>
                        </tr>
                        <tr>
                            <td className={Styles.label}>Asukoht</td>
                            <td>{props.state.location ? props.state.location : ""}</td>
                        </tr>
                        <tr>
                            <td className={Styles.label}>Tellija</td>
                            <td>{props.state.completedBy ? props.state.completedBy : ""}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </MainLayout>

    )
}

export default Index