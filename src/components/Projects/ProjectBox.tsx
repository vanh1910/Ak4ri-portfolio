import type { projectContent } from "../../types/types"


const ProjectBox: React.FC<projectContent> = ({projectName, description, url}) => {
    return(
        <div onClick={() => window.open(url, "_blank", "noopener,noreferrer")}>
            {projectName}
            {description}
        </div>
    )
}

export default ProjectBox