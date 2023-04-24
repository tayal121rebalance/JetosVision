import React, { useState } from "react";
import {
  Askbutton,
  Formmain,
  Blackwrapper,
  Whitetext,
  Bluetext,
  TextContainer,
  InputContainer,
  AnswerContainer,
} from "./index.styled";
import AnswerList from "../AnswerList";

export default function AskMe() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const askRequest = async () => {
    try {
      const response = await fetch("http://localhost:8001/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: text,
          email: "a@gmail.com",
          phone: "908765432",
        }),
      });

      if (response.ok) {
        const newData = await response.json();
        setData([...data, newData]);
        console.log(data);
        
      } else {
        throw new Error("Error submitting input");
      }
      setText("")
    } catch (error) {
      console.error(error);
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
      {data.length!==0 ? (
        <AnswerContainer>
          <AnswerList data={data} />
        </AnswerContainer>
      ) : null}
    </div>
  );
}
