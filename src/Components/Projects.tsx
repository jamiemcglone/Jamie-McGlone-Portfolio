import { useState } from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { songaniserImage, spaceExplorersImage, spaceStationTrackerImage, learnrImage } from "../images/images";


type Project = {
    title: string;
    image: string;
    bio: string;
    github: string;
}

const Projects = () => {

    const learnr: Project = {title: "Learnr", image: learnrImage, bio: "Virtual Learning Environment", github: "https://github.com/treneff/learnr"}
    const spaceExplorers: Project = {title: "Space Explorers", image: spaceExplorersImage, bio: "Space Educational App", github: "https://github.com/jamiemcglone/Space_Explorers"}
    const songaniser: Project = {title: "Songaniser", image: songaniserImage, bio: "Song and Setlist Organiser", github: "https://github.com/jamiemcglone/Songaniser-Project" }
    const blackjack: Project = {title: "Space Station Tracker", image: spaceStationTrackerImage, bio: "Simple ISS Tracker using NASA API's", github: "https://github.com/jamiemcglone/Space-Station-Tracker"}

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
            {projectIndex > 0? <NavigationButton onClick={handlePreviousProjectChangeClick}><ArrowBackIosNewIcon /></NavigationButton> : <div></div>}
            <GithubLink href={myProjects[projectIndex].github} target="_blank"><GitHubIcon fontSize='large'/></GithubLink>
            {projectIndex + 1 < myProjects.length? <NavigationButton onClick={handleNextProjectChangeClick}><ArrowForwardIosIcon /></NavigationButton> : <div></div>}
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
    padding-bottom: 5rem;
`

const ProjectInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProjectImage = styled.img`
    width: 50%;
    height: 55vh;
    @media (max-width: 700px) {
        width: 95%;
        height: 30vh;
    }
`
const GithubLink = styled.a`
padding: 2.5vw;
text-decoration: none;
color: #011627;
position: absolute; 
:hover {
    cursor: pointer;
    color: #037971;
}
`