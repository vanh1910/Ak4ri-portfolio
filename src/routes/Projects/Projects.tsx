import ProjectBox from "../../components/Projects/ProjectBox"
import ProjectLine from "../../components/Projects/ProjectLine"

const projectExample = {
    projectName : "ok",
    description: "ok",
    url: "https://google.com"
}

const Projects = () => {
    return (
        <div>
            <ProjectLine/>
            <ProjectBox {...projectExample}/>
            THis is projects page
        </div>
    )
}

export default Projects