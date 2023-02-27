import styled from "styled-components"

const About = () => {
    return(
    <AboutText>
    I graduated from CodeClan's professional software development course in February 2023.
    My background is in music and I graduated with a first class Bachelor of Honours degree in Popular Music in summer 2022.
    My passion for music production developed into a curiosity to find out how the software I was constantly using was actually created, 
    and so in June 2022 I began self studying programming.
    I thoroughly enjoy the problem solving and creativity that programming requires, and so I pursued it beyond self study.
    I enrolled in CodeClan and began in October 2022. It was a hugely rewarding course and since graduating, I am now excited to find my first junior role.
    </AboutText>
)}

export default About;


const AboutText = styled.p`
    font-size: 1.2rem;
    text-align: center;
    padding: 10vw 10vh;
`
