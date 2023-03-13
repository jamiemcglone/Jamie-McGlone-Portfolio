import React, { useEffect, useState } from "react";
import styled from "styled-components";
import About from "./About";

const Home = () => {


  const [text, setText] = useState("")
  const [fullText, setFullText] = useState("Jamie McGlone - Software Developer");
  const [index, setIndex] = useState(0);

  useEffect(() => {
      if (index < fullText.length) {
          setTimeout(() => {
              setText(text + fullText[index])
              setIndex(index + 1)
          }, 60)
      }
  }, [index]);

    return (
        <HomeContainer>
            <About/>
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