import { useEffect, useState } from "react";
import styled from "styled-components"

const About = () => {

    const [text, setText] = useState("")
    const [fullText, setFullText] = useState("About");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index])
                setIndex(index + 1)
            }, 60)
        }
    }, [index]);
    
    return(
    <AboutContainer>
        <AboutTitle>{text}</AboutTitle>
    <AboutText>
    I graduated from CodeClan's professional software development course in February 2023.
    My previous background was in music and I graduated with a first class Bachelor of Arts with Honours degree in Popular Music in summer 2022.
    My passion for music production developed into a curiosity to find out how the software I was constantly using was actually created, 
    and so in June 2022 I began self studying programming.
    I thoroughly enjoy the problem solving and creativity that programming requires, and so I pursued it beyond self study.
    I enrolled in CodeClan and began in October 2022. It was a hugely rewarding course and since graduating, I am now excited to find my first junior role.
    </AboutText>
    <AboutText>
    Outside of programming, my main passion is music. I love listening to it, and I listen to most genres.
    Additionally, I play guitar in a function band that gigs in various venues across Edinburgh.
    I also love sports, particularly football, which I regularly play at five a sides each week.
    </AboutText>
    </AboutContainer>
)}

export default About;


const AboutText = styled.p`
    font-size: 1.2rem;
    `

const AboutTitle = styled.h1`
    color: #4C2E05;
    text-decoration: underline 0.15rem #037971;
    transition: text-decoration-opacity 300ms;
`
const AboutContainer = styled.div`
      text-align: center;
      display: flex;
      flex-direction: column;
      padding: 5vw 5vh;
`