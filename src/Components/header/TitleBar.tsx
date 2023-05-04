import { useEffect, useState } from "react";
import styled from "styled-components";

const TitleBar = () => {


    const [text, setText] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")
    const [fullText, setFullText] = useState("Jamie McGlone");
    const [fullText2, setFullText2] = useState("Software developer")
    const [index, setIndex] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [fullText3, setFullText3] = useState("Edinburgh, Scotland")
    const [index3, setIndex3] = useState(0);
  
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
      if (index3 < fullText3.length) {
        setTimeout(() => {
            setText3(text3 + fullText3[index2])
            setIndex3(index3 + 1)
        }, 60)
    }
    }, [index, index2, index3]);

      return (
            <TitleTextContainer>
            <ProfileImage src="/photoOfMe2.JPG" />
              <TitleText>[{text}]</TitleText>
              <TitleText>Software Developer</TitleText>
              <TitleText>Edinburgh, Scotland</TitleText>
            </TitleTextContainer>
          )
  }
  
  export default TitleBar;

  const TitleText = styled.h1`
    font-weight: normal;
    color: #cfc8b2;
    font-size: 2.5rem;
    text-align: center;
`

const TitleTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 3rem;
    align-items: center;
`

const ProfileImage = styled.img`
    height: 30vh;
    width: auto;
    border-radius: 20%;
    -webkit-animation: fadein 4s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 4s; /* Firefox < 16 */
        -ms-animation: fadein 4s; /* Internet Explorer */
         -o-animation: fadein 4s; /* Opera < 12.1 */
            animation: fadein 4s;

    @keyframes fadein {
        from {opacity: 0;}
        to { opacity: 1;}
    }

    @-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
`