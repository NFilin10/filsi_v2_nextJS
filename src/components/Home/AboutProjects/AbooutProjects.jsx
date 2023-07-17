import React, {useEffect} from 'react'
import About from './About/About'
import Styles from './AboutProjects.module.css'
import Projects from './Projects/Projects'

import AOS from 'aos';
import 'aos/dist/aos.css';

const AbooutProjects = (props) => {
    return (
        <div className={Styles.aboutProjectsWrapper}>
            <div className={Styles.aboutProjectsContent}>
                <About/>
                <Projects state={props.state}/>
            </div>
        </div>
    )
}

export default AbooutProjects