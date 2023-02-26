import Header from "./Components/header/Header";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Projects from "./Components/Projects";

const PortfolioContainer = () => {
    return <>
    <Header />
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
    </>
}

export default PortfolioContainer;