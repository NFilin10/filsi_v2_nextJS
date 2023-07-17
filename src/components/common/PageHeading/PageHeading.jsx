import React from 'react'
import Styles from "./PageHeading.module.css"


const PageHeading = (props) => {
    return(
        <div className={Styles.pageHeadingContent}>
            <div className={Styles.pageHeading}>
                <h1>
                    {props.state.upperHeading}
                    <br/>
                    {props.state.lowerHeading}
                </h1>
                <p>{props.state.supHeading}</p>
            </div>
        </div>

    )
}

export default PageHeading