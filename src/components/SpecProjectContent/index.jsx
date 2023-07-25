import React from 'react'
import Styles from './SpecProjectContent.module.css'
import Image from "next/image";
import MainLayout from "@/layouts/MainLayout";


const Index = ({state, project}) => {

    return (
        <MainLayout>
            <div className={Styles.wrapper}>
                <div className={Styles.header}>

                    <h1>{project.name}</h1>
                </div>
                <div className={Styles.projectImg}>
                    <Image src={project.img}
                           alt=""/>
                </div>
                <div className={Styles.content} data-aos="zoom-in-up">
                    <p className={Styles.projectInfo}>
                        {project.projectDescription}
                    </p>
                    <table className={Styles.table}>
                        <tbody className={Styles.tableBody}>
                        <tr>
                            <td className={Styles.label}>{state.finishDate}</td>
                            <td>{project.finishDate}</td>
                        </tr>
                        <tr>
                            <td className={Styles.label}>{state.location}</td>
                            <td>{project.location}</td>
                        </tr>
                        <tr>
                            <td className={Styles.label}>{state.orderer}</td>
                            <td>{project.completedBy}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </MainLayout>

    )
}

export default Index