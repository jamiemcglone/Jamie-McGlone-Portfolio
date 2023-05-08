import { useEffect, useState } from "react";
import styled from "styled-components"

const About = () => {

  
    return(
    <AboutSection>

    <AboutContainer id="about">
        <AboutTitle>About</AboutTitle>
    <AboutText>
    I am a proficient and creative software developer based in Edinburgh, Scotland. I love problem solving and challenging myself 
    and this is something I strive to do through coding.
    I graduated from CodeClan's professional software development course earlier this year and during my time on this course I studied multiple technologies, but the part I loved most was spending time in a 
    classroom everyday learning with my fellow classmates.
    </AboutText>
    <AboutText>
    My previous background was in music and retail. I graduated with a first class Bachelor of Arts with Honours degree in Popular Music during the summer of 2022.
    My passion for music production developed into a passion for software as I was fascinated by the music software I was using daily. This inspired me to pursue a career in tech and so once I graduated I began self-studying programming.
    </AboutText>
    <AboutText>
    Currently I am working as a freelance software developer. I am working with Small99 to improve their onboarding process for customers. Additionally, I am working to build a carbon footprint calculator,
    doing so using new technologies to me. I have also been spending my time volunteering as a web developer for Vell Magazine. Get in touch if you want to work together!
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
      padding: 5vw 3vh;
      align-items: center;
      background-color: #cfc8b2;
      width: 50%;
      justify-content: center;
      border: solid 1px #cfc8b2;
      border-radius: 20px;
      @media (max-width: 950px) {
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