import { useEffect, useState } from "react";
import styled from "styled-components";

const TitleBar = () => {


    const [text, setText] = useState("")
    const [fullText, setFullText] = useState("Jamie McGlone, Software Developer");
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
              <TitleText>[{text}]</TitleText>
          )
  }
  
  export default TitleBar;

  const TitleText = styled.h1`
    font-weight: normal;
    color: #037971;
    text-align: center;
  `