import { useState } from "react";

const Projects = () => {

    const myProjects: Array<string> = ["Learnr", "Space Explorers", "Songaniser", "Blackjack Terminal Game"]


    const [projectIndex, setProjectIndex] = useState(0);

    const handleNextProjectChangeClick = () => {
        setProjectIndex(projectIndex + 1);
    }

    const handlePreviousProjectChangeClick = () => {
        setProjectIndex(projectIndex - 1);
    }

    return <>
        <p>{myProjects[projectIndex]}</p>
        {projectIndex > 0? <button onClick={handlePreviousProjectChangeClick}>Previous project!</button> : null}
        {projectIndex + 1 < myProjects.length? <button onClick={handleNextProjectChangeClick}>Next Project!</button> : null}
    </>
}

export default Projects;