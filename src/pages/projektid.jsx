
import state from "@/state";
import ProjectsGallery from "@/components/Projects/ProjectsGallery/ProjectsGallery";
import MainLayout from "@/layouts/MainLayout";


const Projektid = ({props}) => {

    const propsObj = JSON.parse(props)


    return (
        <MainLayout>
            <div>
                <ProjectsGallery state={propsObj.home[0]}/>
                {/*<Map/>*/}
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