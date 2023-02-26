import React, { useEffect, useState } from "react";

const Home = () => {


  const [text, setText] = useState("")
  const [fullText, setFullText] = useState("Hi, I am Jamie McGlone, welcome to my portfolio")
  const [index, setIndex] = useState(0);

  useEffect(() => {
      if (index < fullText.length) {
          setTimeout(() => {
              setText(text + fullText[index])
              setIndex(index + 1)
          }, 60)
      }
  }, [index]);

    return <>{text}</>
}

export default Home;