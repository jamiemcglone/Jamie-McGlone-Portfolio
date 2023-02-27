import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Home = () => {


  const [text, setText] = useState("")
  const [fullText, setFullText] = useState("Hi, my name is Jamie McGlone, I am a software developer based in Edinburgh, Scotland");
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
        <HomeText>{text}</HomeText>)
}

export default Home;

const HomeText = styled.p`
    color: #4C2E05;
    text-align: center;
    font-size: 1.5rem;
`