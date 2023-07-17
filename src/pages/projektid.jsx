
import state from "@/state";
import ProjectsGallery from "@/components/Projects/ProjectsGallery/ProjectsGallery";
import MainLayout from "@/layouts/MainLayout";
import dynamic from "next/dynamic";
// import Map from "@/components/Projects/Map/Map";


const Projektid = ({props}) => {

    const propsObj = JSON.parse(props)

    const DynamicMap = dynamic(() => import("@/components/Projects/Map/Map"), {
        ssr: false,
    })


    return (
        <MainLayout>
            <div>
                <ProjectsGallery state={propsObj.home[0]}/>
                <DynamicMap/>
            </div>
        </MainLayout>



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