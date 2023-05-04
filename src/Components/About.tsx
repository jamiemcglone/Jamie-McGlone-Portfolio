import { useEffect, useState } from "react";
import styled from "styled-components"

const About = () => {

  
    return(
    <AboutSection>

    <AboutContainer id="about">
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
    </AboutSection>
)}

export default About;


const AboutText = styled.p`
    font-size: 1.2rem;
    text-align: center;
    animation: text-slide-in-anim 3s ease-in forwards;
        @keyframes text-slide-in-anim {
	20% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
    `

const AboutTitle = styled.h1`
    color: #011627;
    text-decoration: underline 0.25rem #037971;
    transition: text-decoration-opacity 300ms;
`
const AboutContainer = styled.div`
      display: flex;
      flex-direction: column;
      padding: 5vw 5vh;
      align-items: center;
      background-color: #cfc8b2;
      width: 50%;
      justify-content: center;
      border: solid 1px #cfc8b2;
      border-radius: 20px;
      @media (max-width: 800px) {
        width: 70%;
      }
      animation: slide-in-anim 2.5s ease-out forwards;
        @keyframes slide-in-anim {
	20% {
		opacity: 0;
        transform: translateX(-45%);
	}
	100% {
		opacity: 1;
	}
}
`

const AboutSection = styled.div`
    margin-top: 27rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`