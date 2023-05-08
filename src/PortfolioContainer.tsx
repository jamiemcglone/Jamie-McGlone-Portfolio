import Header from "./Components/header/Header";
import About from "./Components/About";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import styled from "styled-components";
import Skills from "./Components/Skills";

const PortfolioContainer = () => {
    return <>
    <Header />
    <BodySection>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
    <Footer id="footer">
        © Jamie McGlone {new Date().getFullYear()}
    </Footer>
    </BodySection>
    </>
}

export default PortfolioContainer;

const Footer = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  color: #cfc8b2;
`
const BodySection = styled.main`
    
`