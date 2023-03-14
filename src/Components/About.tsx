import { useEffect, useState } from "react";
import styled from "styled-components"

const About = () => {

  
    return(
    <AboutContainer>
        <AboutTitle>About</AboutTitle>
    <AboutText>
    I am a software developer based in Edinburgh, Scotland. I love problem solving and challenging myself 
    and this is something I strive to do through coding.
    I graduated from CodeClan's professional software development course in February 2023. On this course I studied Python, Javascript and Java, 
    and thoroughly enjoyed my time working with my fellow students.
    </AboutText>
    <AboutText>
    My previous background was in music and retail. I graduated with a first class Bachelor of Arts with Honours degree in Popular Music in summer 2022.
    My passion for music production developed into a curiosity to find out how the software I was constantly using was actually created, 
    and so in the summer of 2022 I began self studying programming.
    </AboutText>
    <AboutText>
    Outside of programming, my main passion is music. I love listening to it and playing it, and I enjoy most genres too.
    I play guitar in a function band that gigs in various venues across Edinburgh.
    I also love sports, particularly football, which I regularly play at five a sides each week.
    </AboutText>
    </AboutContainer>
)}

export default About;


const AboutText = styled.p`
    font-size: 1.2rem;
    width: 60%;
    text-align: left;
    `

const AboutTitle = styled.h1`
    color: #037971;
    text-decoration: underline 0.25rem #011627;
    transition: text-decoration-opacity 300ms;
`
const AboutContainer = styled.div`
      text-align: center;
      display: flex;
      flex-direction: column;
      padding: 5vw 5vh;
      align-items: center;
`