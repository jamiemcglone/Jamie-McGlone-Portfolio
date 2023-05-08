import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import styled from 'styled-components';


const NavBar = () => {

    return(
        <LinksList>
            <LinkItem href="https://www.github.com/jamiemcglone" target={"_blank"}><GitHubIcon fontSize='large'/></LinkItem>
            <LinkItem href="https://www.linkedin.com/in/jamie-mcglone-943914236/" target={"_blank"}><LinkedInIcon fontSize='large'/></LinkItem>
            <LinkItem href="mailto:jamie.mcglone@outlook.com" target={"_blank"}><MailIcon fontSize='large'/></LinkItem>
        </LinksList>
    )
}

export default NavBar;

const LinksList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 5rem;
    margin-right: 1.5rem;
    @media (max-width: 1100px) {
       gap: 2rem;
       margin-left: 12rem;
    }
`

const LinkItem = styled.a`
    text-decoration: none;
    color: #cfc8b2;
    :hover {
        cursor: pointer;
        color: #037971;
    }
`