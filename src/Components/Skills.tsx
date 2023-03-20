import styled from "styled-components";
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import BuildIcon from '@mui/icons-material/Build';
import ScienceIcon from '@mui/icons-material/Science';

const Skills = () => {
    return(
        <GridContainer>
        <GridItemLanguages>
            <GridHeader><CodeIcon /><br/>Languages</GridHeader>
            <GridText>Python</GridText>
            <GridText>TypeScript</GridText>
            <GridText>Java</GridText>
            <GridText>JavaScript</GridText>
            <GridText>HTML & CSS</GridText>
            <GridText>SQL</GridText>
        </GridItemLanguages>
        <GridItemTechnologies>
            <GridHeader><DevicesIcon /><br/>Technologies</GridHeader>
            <GridText>Git</GridText>
            <GridText>GitHub</GridText>
            <GridText>MongoDB</GridText>
            <GridText>Postgresql</GridText>
            <GridText>REST APIs</GridText>
            <GridText>Mocha</GridText>
        </GridItemTechnologies>
        <GridItemFrameworks>
            <GridHeader><BuildIcon /><br/>Frameworks & Libraries</GridHeader>
            <GridText>React</GridText>
            <GridText>Flask</GridText>
            <GridText>Spring</GridText>
            <GridText>Express</GridText>
        </GridItemFrameworks>
        <GridItemSkills>
        <GridHeader><ScienceIcon /><br/>Skills</GridHeader>
            <GridText>Agile</GridText>
            <GridText>TDD</GridText>
            <GridText>Database design</GridText>
            <GridText>OOP</GridText>
        </GridItemSkills>
        </GridContainer>
    )
}

export default Skills;

const GridContainer = styled.div`
    padding-top: 4rem;
    display: grid;
    grid-template-columns: 300px 300px;
    grid-template-rows: 300px 300px;
    grid-row: auto auto;
    grid-template-areas: 
    "languages"
    "technologies"
    "frameworks"
    "skills";
    column-gap: 5rem;
    row-gap: 5rem;
    align-items: center;
    justify-content: center;
    font-size: large;
    @media (max-width: 700px) {
        grid-template-columns: 300px;
        grid-template-rows: 300px 200px 200px 175px;
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
    color: #037971;
    text-decoration: underline 0.2rem #011627;

    
    
`

const GridText = styled.p``