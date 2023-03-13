import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const NavBar = () => {

    return(
        <LinksList>
            <LinkItem href="https://www.github.com/jamiemcglone" target={"_blank"}><GitHubIcon /></LinkItem>
            <LinkItem href="https://www.linkedin.com/jamiemcglone" target={"_blank"}><LinkedInIcon /></LinkItem>
            <LinkItem href="mailto:jamie.mcglone@outlook.com" target={"_blank"}><MailIcon /></LinkItem>
        </LinksList>
    )
}

export default NavBar;

const LinksList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: space-evenly;
`

const LinkItem = styled.a`
    padding: 2.5vw;
    text-decoration: none;
    color: #011627;
    :hover {
        cursor: pointer;
        color: #037971;
    }
`