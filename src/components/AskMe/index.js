
import React, { useState, useEffect } from "react";
import {
  Askbutton,
  Formmain,
  Blackwrapper,
  Whitetext,
  Bluetext,
  TextContainer,
  InputContainer,
  AnswerContainer,
  LoadingContainer,
} from "./index.styled";

import AnswerList from "../AnswerList";

export default function AskMe() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log("loading state changed to:", loading);
  }, [loading]);
  const askRequest = async () => {
    setLoading(true);
    try {
      console.log("making a loading request. Now here's the var")
      console.log(loading);
      const response = await fetch("/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: text,
        }),
      });
     console.log("this is just after loading. and her's the var"); 
     console.log(loading);

      if (response.ok) {
        const newData = await response.json();
        setData([...data, newData]);
        console.log(data);
      } else {
        throw new Error("Error submitting input");
      }
      setText("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <Blackwrapper>
          <TextContainer>
            <Whitetext>Ask me</Whitetext>
            <Bluetext>Anything</Bluetext>
          </TextContainer>
          <InputContainer>
            <Formmain
              placeholder="Enter your question"
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
            ></Formmain>
            <Askbutton onClick={askRequest}>Ask</Askbutton>
          </InputContainer>
        </Blackwrapper>
      </div>
      {loading ? (
        <LoadingContainer>Process request, please wait for 120 seconds for the server to respond to your request...</LoadingContainer> // You can replace this with a spinner or any other loading indicator
      ) : data.length !== 0 ? (
        <AnswerContainer>
          <AnswerList data={data} />
        </AnswerContainer>
      ) : null}
    </div>
  );
}
