import ProjectBox, { type projectContent } from "../../components/Projects/ProjectBox"
import Hero from "./Hero"
import ProjectLine from "../../components/Projects/ProjectLine"


const projectExample: projectContent = {
    projectName : "ok",
    projectDescription: "ok",
    url: "https://google.com"
}


const Home = () => {
    return (
        <div className = "dark:bg-gray-800">
            <Hero/>
            This is home
            <ProjectLine/>
            <ProjectBox 
                {...projectExample}           
            />
        </div>
    )
}

export default Home