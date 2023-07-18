
import state from "@/state";
import ProjectsGallery from "@/components/Projects/ProjectsGallery/ProjectsGallery";
import MainLayout from "@/layouts/MainLayout";
import dynamic from "next/dynamic";
import Head from "next/head";
// import Map from "@/components/Projects/Map/Map";


const Projektid = ({props}) => {

    const propsObj = JSON.parse(props)

    const DynamicMap = dynamic(() => import("@/components/Projects/Map/Map"), {
        ssr: false,
    })


    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="author" content="Filsi"/>
                <meta name="description" content="Tutvuge meie tehtud projektidega! Oleme edukalt lõpetanud mitmeid olulisi projekte, sealhulgas Kakumäe sadama, Module Tech'i, Eesti Traadi ja Favoriga. Vaadake meie tööde galeriid ning saage aimu meie kogemustest ja oskustest elektrimontaaživaldkonnas."/>
                <meta name="keywords" content="tehtud projektid, Kakumäe sadam, Module Tech, Eesti Traat, Favor, elektrimontaaž, galerii, kogemused, oskused"/>
                <title>Filsi - Tehtud Projektid</title>
            </Head>
            <MainLayout>
                <div>
                    <ProjectsGallery state={propsObj.home[0]}/>
                    <DynamicMap/>
                </div>
            </MainLayout>
        </>




    );
}

export default Projektid

export async function getStaticProps() {
    const props = JSON.stringify(state)
    return {
        props: {
            props
        }
    };
}