import React from 'react'
import About from './About/About'
import Styles from './AboutProjects.module.css'
import Projects from './Projects/Projects'
import 'aos/dist/aos.css';

const AbooutProjects = ({state, projects}) => {
    console.log(state)
    return (
        <div className={Styles.aboutProjectsWrapper}>
            <div className={Styles.aboutProjectsContent}>
                <About state={state}/>
                <Projects projects={projects}/>
            </div>
        </div>
    )
}

export default AbooutProjects