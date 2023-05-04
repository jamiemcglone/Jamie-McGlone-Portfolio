import React, { useEffect, useState } from "react";
import styled from "styled-components";
import About from "./About";
import TitleBar from "./header/TitleBar";

const Home = () => {

    return (
        <HomeContainer>
            <TitleBar />
        </HomeContainer>
        )
}

export default Home;

const HomeText = styled.p`
    color: #037971;
    text-align: center;
    font-size: 3rem;
`

const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`