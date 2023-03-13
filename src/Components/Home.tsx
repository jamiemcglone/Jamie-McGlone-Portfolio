import React, { useEffect, useState } from "react";
import styled from "styled-components";
import About from "./About";

const Home = () => {


  const [text, setText] = useState("")
  const [fullText, setFullText] = useState("Jamie McGlone");
  const [index, setIndex] = useState(0);
  const [text2, setText2] = useState("")
  const [fullText2, setFullText2] = useState("Software Developer");
  const [index2, setIndex2] = useState(0);

  useEffect(() => {
      if (index < fullText.length) {
          setTimeout(() => {
              setText(text + fullText[index])
              setIndex(index + 1)
          }, 60)
      }
      if (index2 < fullText2.length) {
        setTimeout(() => {
            setText2(text2 + fullText2[index2])
            setIndex2(index2 + 1)
        }, 60)
      }
  }, [index, index2]);

    return (
        <HomeContainer>
            <HomeText>{text}</HomeText>
            <HomeText>{text2}</HomeText>
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
    justify-content: space-evenly;
    flex-direction: column;
`