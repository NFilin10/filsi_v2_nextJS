import React, {useEffect} from 'react'
import Styles from './SpecProjectContent.module.css'
import AOS from "aos";
import Image from "next/image";
import MainLayout from "@/layouts/MainLayout";

const SpecProjectContent = (props) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <MainLayout>
            <div className={Styles.wrapper}>
                <div className={Styles.header}>
                    <h1>{props.state.name}</h1>
                </div>
                <div className={Styles.projectImg}>
                    <Image src={props.state.img}
                           alt=""/>
                </div>
                <div className={Styles.content} data-aos="zoom-in-up">
                    <table className={Styles.table}>
                        <thead>
                        <tr>
                            <th colSpan="2"><h2>{props.state.name}</h2></th>
                        </tr>
                        </thead>
                        <tbody className={Styles.tableBody}>
                        <tr>
                            <td className={Styles.label}>Lõpetamise kuupäev</td>
                            <td>{props.state.finishDate}</td>
                        </tr>
                        <tr>
                            <td className={Styles.label}>Asukoht</td>
                            <td>{props.state.location}</td>
                        </tr>
                        <tr>
                            <td className={Styles.label}>Tellija</td>
                            <td>{props.state.completedBy}</td>
                        </tr>
                        </tbody>
                    </table>
                    <p className={Styles.projectInfo}>
                        {props.state.projectDescription}
                    </p>
                </div>

            </div>
        </MainLayout>

    )
}

export default SpecProjectContent