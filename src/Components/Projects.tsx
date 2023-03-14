import { useState } from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


type Project = {
    title: string;
    image: string;
    bio: string;
}

const Projects = () => {

    const learnr: Project = {title: "Learnr", image: "", bio: "a VLE"}
    const spaceExplorers: Project = {title: "Space Explorers", image: "https://user-images.githubusercontent.com/65739239/212085496-2725a4c3-2861-4c87-9af2-782e56b7c3c9.png", bio: "space woooo"}
    const songaniser: Project = {title: "Songaniser", image: "https://github.com/jamiemcglone/Songaniser-Project/raw/main/Songaniser%20Home%20Page.png", bio: "organise songs"}
    const blackjack: Project = {title: "BlackJack Terminal Game", image: "www.fakeimage.com", bio: "fun terminal game"}

    const myProjects: Array<Project> = [learnr, spaceExplorers, songaniser, blackjack]


    const [projectIndex, setProjectIndex] = useState(0);

    const handleNextProjectChangeClick = () => {
        setProjectIndex(projectIndex + 1);
    }

    const handlePreviousProjectChangeClick = () => {
        setProjectIndex(projectIndex - 1);
    }

    return (
    <ProjectPageContainer>
        <ProjectInformationContainer>
            <h3>{myProjects[projectIndex].title}</h3>
            <ProjectImage src={myProjects[projectIndex].image}/>
            <p>{myProjects[projectIndex].bio}</p>
        </ProjectInformationContainer>
        <ProjectPageButtons>
            {projectIndex > 0? <NavigationButton onClick={handlePreviousProjectChangeClick}><ArrowBackIosNewIcon /></NavigationButton> : null}
            {projectIndex + 1 < myProjects.length? <NavigationButton onClick={handleNextProjectChangeClick}><ArrowForwardIosIcon /></NavigationButton> : null}
        </ProjectPageButtons>
    </ProjectPageContainer>
    )
}

export default Projects;

const NavigationButton = styled.div`
    :hover {
        cursor: pointer;
    }
`
const ProjectPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ProjectPageButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

const ProjectInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProjectImage = styled.img`
    width: 50%;
    @media (max-width: 700px) {
        width: 95%;
    }
`