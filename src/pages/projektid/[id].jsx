import React from 'react'
import state from "@/state";
import {useRouter} from "next/router";
import Head from "next/head";
import Index from "src/components/SpecProjectContent";



const Id = (props) => {

    const params = useRouter()

    let id = 0
    for (const object of props.home[0].projects) {
        if (object.url === params.query.id){
            break
        }
        id++
    }


    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="author" content="Filsi"/>
                <title>{props.home[0].projects[id].name}</title>
                <meta name="description" content={props.home[0].projects[id].projectDescription}/>
                <meta name="keywords" content="objekt, ehitustööd, projekt"/>
            </Head>
            <div>
                <Index state={props.home[0].projects[id]}/>
            </div>
        </>

    )
}
export default Id


export async function getStaticProps() {
    return {
        props: state
    };
}


export async function getStaticPaths() {

    const paths = state.home[0].projects.map((project) => ({
        params: {id:project.url}
    }))

    return {paths, fallback: false};
}
