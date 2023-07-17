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
    // Fetch the data required to generate dynamic paths
    // For example, you can query an API or fetch data from a database

    // Return an array of objects containing the `params` key
    // Each object represents a dynamic path and should contain the necessary parameters
    // For example:
    return {
        paths: [
            { params: { id: 'kakumae-sadam' } }, // Replace 'project1' with an actual project ID
            { params: { id: 'module-tech' } }, // Replace 'project2' with an actual project ID
            { params: { id: 'eesti-traat' } }, // Replace 'project2' with an actual project ID
            { params: { id: 'favor' } }, // Replace 'project2' with an actual project ID
            { params: { id: 'r13' } }, // Replace 'project2' with an actual project ID
            // Add more objects for additional dynamic paths
        ],
        fallback: false, // Set to true if you have additional dynamic paths that are not specified here
    };
}
