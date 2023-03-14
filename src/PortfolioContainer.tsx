import Header from "./Components/header/Header";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import styled from "styled-components";
import Skills from "./Components/Skills";

const PortfolioContainer = () => {
    return <>
    <Header />
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
    <Footer id="footer">
        © Jamie McGlone {new Date().getFullYear()}
    </Footer>
    </>
}

export default PortfolioContainer;

const Footer = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  text-align: center;
  gap: 1rem;
`