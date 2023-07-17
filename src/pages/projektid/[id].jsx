import React from 'react'
import {useParams} from "react-router-dom";
import SpecProjectContent from "@/pages/projektid/SpecProjectContent/SpecProjectContent";
import state from "@/state";
import {useRouter} from "next/router";


const Id = ({props}) => {

    const propsObj = JSON.parse(props)

    const params = useRouter()

    let id = 0
    for (const object of propsObj.home[0].projects) {
        if (object.url === params.query.id){
            break
        }
        id++
    }



    return (
        <div>
            <SpecProjectContent state={ propsObj.home[0].projects[id]}/>
        </div>
    )
}
export default Id


export async function getStaticProps() {
    const props = JSON.stringify(state)
    return {
        props: {
            props
        }
    };
}


export async function getStaticPaths() {

    // const props = JSON.stringify(state)

    const paths = state.home[0].projects.map((project) => ({
        params: {id:project.url}
    }))

    return {paths, fallback: false};
}
