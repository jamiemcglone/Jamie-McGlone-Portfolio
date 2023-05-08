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
    tech: Array<string>;
}

const Projects = () => {

    const learnrBio = "Developed as a group of 3 people across 2 weeks, this projects goal was to build a virtual learning environment that could be used for students on the CodeClan professional software development course. We built our own API in Java/Spring backend, and chose to challenge ourselves by using TypeScript, a language we were not taught on the CodeClan course. This project was very challenging but very rewarding, as we had many complex issues, such as database structure, but solving them was very satisfying."
    const learnrTech = ["TypeScript", "React", "Java", "Spring", "Postgresql", "Styled Components", "Git"]

    const spaceExplorersBio = "Developed as a group of 4 people in 1 week, this educational app focused on the solar system. The app consisted of multiple information pages as well as an interactive game. We also incorporated external API's, using one of NASA's photo API's. I was particularly proud of how interactive and engaging this app is, with the game being controllable using arrow keys, and many of the objects visible on the website being clickable and animated."
    const spaceExplorersTech = ["Javascript", "React", "Node.js", "RESTful API", "MongoDB", "Express", "Git"]

    const songaniserBio = "An individual full stack Python Flask project, the application enables a user to organise songs they perform for their bands, allowing them to save, edit and delete from the database from the front end. This project was also completed in the space of 1 week. I also added a search bar which allowed users to type in the title of the song they were looking for, with the app returning that songs information page. Implementing this was particularly challenging, but it became my proudest part of this project once I got it working as I intended."
    const songaniserTech = ["Python", "Flask", "HTML", "CSS", "SQL", "Git", "RESTful routes"]

    const issTrackerBio = "This was an individual project completed during the Javascript module at CodeClan and the task was to create an app that uses external API. I chose to interact with two, a space station tracker and google maps API. I found this project very enjoyable but it also showed me some of the challenges of working with external API's, such as accessing data and API integration. Overall I was very happy with how the project turned out, as although it looks simple on the front end, I managed to challenge myself to work with multiple API's so the information displayed exactly as intended."
    const issTrackerTech = ["Javascript", "React", "NASA API's", "Google Maps API", "HTML", "CSS", "Styled Components"]

    const learnr: Project = {title: "Learnr", image: learnrImage, bio: learnrBio, github: "https://github.com/treneff/learnr", tech: learnrTech}
    const spaceExplorers: Project = {title: "Space Explorers", image: spaceExplorersImage, bio: spaceExplorersBio, github: "https://github.com/jamiemcglone/Space_Explorers", tech: spaceExplorersTech}
    const songaniser: Project = {title: "Songaniser", image: songaniserImage, bio: songaniserBio, github: "https://github.com/jamiemcglone/Songaniser-Project", tech: songaniserTech}
    const issTracker: Project = {title: "ISS Tracker", image: spaceStationTrackerImage, bio: issTrackerBio, github: "https://github.com/jamiemcglone/Space-Station-Tracker", tech: issTrackerTech}

    const myProjects: Array<Project> = [learnr, spaceExplorers, songaniser, issTracker]



    const [projectIndex, setProjectIndex] = useState(0);

    const handleNextProjectChangeClick = () => {
        setProjectIndex(projectIndex + 1);
    }

    const handlePreviousProjectChangeClick = () => {
        setProjectIndex(projectIndex - 1);
    }

    const technologiesList = (technologies: Array<string>) => {
        return technologies.map((tech: string) => {
            return<li>{tech}</li>
        })
    }

    return (
    <ProjectPageContainer id="projects">
        <ProjectCard>

        <ProjectInformationContainer>
            <ProjectTitle>{myProjects[projectIndex].title}</ProjectTitle>
            <ProjectImage src={myProjects[projectIndex].image}/>
            <p>{myProjects[projectIndex].bio}</p>
            <TechTitle>Technologies Used:</TechTitle>
            <ul>
                {technologiesList(myProjects[projectIndex].tech)}
            </ul>
        </ProjectInformationContainer>
        <ProjectPageButtons>
            {projectIndex > 0? <NavigationButton onClick={handlePreviousProjectChangeClick}><ArrowBackIosNewIcon /></NavigationButton> : <div></div>}
            <GithubLink href={myProjects[projectIndex].github} target="_blank"><GitHubIcon fontSize='large'/></GithubLink>
            {projectIndex + 1 < myProjects.length? <NavigationButton onClick={handleNextProjectChangeClick}><ArrowForwardIosIcon /></NavigationButton> : <div></div>}
        </ProjectPageButtons>
        </ProjectCard>
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
    justify-content: center;
    align-items: center;
    margin-top: 27rem;
    width: 100%;
    margin-bottom: 2rem;
`

const ProjectCard = styled.div`
    background-color: #cfc8b2;
    width: 50%;
    border-radius: 20px;
    padding: 5vw 3vh;
    @media (max-width: 950px) {
        width: 70%;
      }
    animation: slide-in-anim 4.5s ease-out forwards;
        @keyframes slide-in-anim {
	20% {
		opacity: 0;
        transform: translateX(-45%);
	}
	100% {
		opacity: 1;
	}
}
`

const TechTitle = styled.h4`
    color: #011627;
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
    animation: text-slide-in-anim 3s ease-in forwards;
        @keyframes text-slide-in-anim {
	20% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`

const ProjectImage = styled.img`
    width: 90%;
    height: 55vh;
    @media (max-width: 700px) {
        width: 90%;
        height: 20vh;
    }
    animation: text-slide-in-anim 3s ease-in forwards;
        @keyframes text-slide-in-anim {
	20% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
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

const ProjectTitle = styled.h1`
    color: #011627;
    text-decoration: underline 0.25rem #037971;
    transition: text-decoration-opacity 300ms;
    animation: text-slide-in-anim 3s ease-in forwards;
        @keyframes text-slide-in-anim {
	20% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`