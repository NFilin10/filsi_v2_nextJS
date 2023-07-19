import React, {useEffect, useState} from 'react'

import Styles from './ProjectsGallery.module.css'
import {useLocation} from "react-router-dom";
import AOS from "aos";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";
import PageHeading from "@/components/common/PageHeading/PageHeading";


const ProjectsGallery = (props) => {

    const location = useRouter();

    // Check if the current URL matches the "/other" route
    const projectPage = location.pathname === '/projektid';

    // Set the body background color based on the URL
    useEffect(() => {
        document.body.style.backgroundColor = projectPage ? '#2d2d2d' : 'white';

        // Clean up the effect when the component unmounts
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [projectPage]);


    const [noOfElement, setnoOfElement] = useState(3);
    const loadMore = () => {
        if (noOfElement + noOfElement >= props.state.projects.length) {
            const btn = document.querySelector(`.${Styles.buttonWrapper}`)
            btn.style.display = "none"
            const gallery = document.querySelector(`.${Styles.projectPhotos}`)
            gallery.style.marginBottom = "120px"

        }
        setnoOfElement(noOfElement + noOfElement)
    }
    const slice = props.state.projects.slice(0, noOfElement)


    let projectElements = slice.map((project, index) =>
        <Link href={"/projektid/" + project.url}  key={index}>
            <div className={Styles.project} data-aos="fade-down"  data-aos-duration="1500">
                <Image className={Styles.serviceImg}  src={project.img}  alt=""/>
                <div className={Styles.projectName}>{project.name}</div>
            </div>
        </Link>

    )

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className={Styles.projectsGalleryContainer}>
            <div className={Styles.projectsGalleryContent}>
                <PageHeading state={props.state.pageInfoProjects[0]}/>
            </div>
            <div className={Styles.projectPhotosWrapper}>
                <div className={Styles.projectPhotos} >
                    {projectElements}
                </div>
                <div className={Styles.buttonWrapper}>
                    <button className={Styles.allProjectsBtn} onClick={() => loadMore()}>KUVA ROHKEM</button>
                </div>
            </div>


        </div>
    )
}

export default ProjectsGallery