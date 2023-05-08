import styled from "styled-components";
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import BuildIcon from '@mui/icons-material/Build';
import ScienceIcon from '@mui/icons-material/Science';

const Skills = () => {
    return(
        <SkillSection>

        <GridContainer id="skills">
        <GridItemLanguages>
            <GridHeader><ItemIcon><CodeIcon /></ItemIcon><br/>Languages</GridHeader>
            <GridText>Python</GridText>
            <GridText>TypeScript</GridText>
            <GridText>Java</GridText>
            <GridText>JavaScript</GridText>
            <GridText>HTML & CSS</GridText>
            <GridText>SQL</GridText>
        </GridItemLanguages>
        <GridItemTechnologies>
            <GridHeader><ItemIcon><DevicesIcon /></ItemIcon><br/>Technologies</GridHeader>
            <GridText>Git</GridText>
            <GridText>GitHub</GridText>
            <GridText>MongoDB</GridText>
            <GridText>Postgresql</GridText>
            <GridText>REST APIs</GridText>
            <GridText>Mocha</GridText>
        </GridItemTechnologies>
        <GridItemFrameworks>
            <GridHeader><ItemIcon><BuildIcon /></ItemIcon><br/>Frameworks & Libraries</GridHeader>
            <GridText>React</GridText>
            <GridText>Flask</GridText>
            <GridText>Spring</GridText>
            <GridText>Express</GridText>
        </GridItemFrameworks>
        <GridItemSkills>
        <GridHeader><ItemIcon><ScienceIcon /></ItemIcon><br/>Skills</GridHeader>
            <GridText>Agile</GridText>
            <GridText>TDD</GridText>
            <GridText>Database design</GridText>
            <GridText>OOP</GridText>
        </GridItemSkills>
        </GridContainer>
        </SkillSection>
    )
}

export default Skills;

const GridContainer = styled.div`
    background-color: #cfc8b2;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    grid-row: auto auto;
    width: 50%;
    padding: 5vw 3vh;
    gap: 2rem;
    font-size: large;
    @media (max-width: 950px) {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: flex-start;
       margin-bottom: 0;
       margin-top: 0;
       width: 70%;
    }
	    animation: slide-in-anim 3.5s ease-out forwards;
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

const GridItemLanguages = styled.div`
    grid-area: "languages";

`
const GridItemFrameworks = styled.div`
    grid-area: "frameworks";
`
const GridItemTechnologies = styled.div`
    grid-area: "technologies";
`
const GridItemSkills = styled.div`
    grid-area: "skills";
`
const GridHeader = styled.h3`
    color: #011627;
    text-decoration: underline 0.2rem #037971;

    
    
`

const GridText = styled.p`
	    animation: text-slide-in-anim 4.5s ease-in forwards;
        @keyframes text-slide-in-anim {
	20% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}`

const SkillSection = styled.div`
    margin-top: 27rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ItemIcon = styled.div`
    color: #037971;
`