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

const openAiCompletion = async (messages, onText) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer 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`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages,
        model: "gpt-4",
        max_tokens: 2048,
        stream: true,
      }),
    });

    const decoder = new TextDecoder("utf8");
    const reader = response.body.getReader();

    let fullText = "";
    let lastFire = 0;

    async function read() {
      const { value, done } = await reader.read();

      if (done) return onText(fullText);

      const delta = decoder
        .decode(value)
        .match(/"delta":\s*({.*?"content":\s*".*?"})/)?.[1];

      if (delta) {
        const content = JSON.parse(delta).content;

        fullText += content;

        //Detects punctuation, if yes, fires onText once per .5 sec
        if (/[\p{P}\p{S}]/u.test(content)) {
          const now = Date.now();

          if (now - lastFire > 500) {
            lastFire = now;
            onText(fullText);
          }
        }
      }

      await read();
    }

    await read();

    return fullText;
  } catch (error) {
    return error;
  }
};

export default function AskMe() {
  const [text, setText] = useState("");
  const [generatedTextt, setGeneratedText] = useState("");
  const [data, setData] = useState([]);

  const askRequest = async () => {
    
    const messages = [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: text },
    ];

    const onText = (newText) => {
      setGeneratedText(newText);
      setData([...data, { question: text, answer: newText }]);
    };

    await openAiCompletion(messages, onText);
    setText(" ");
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
      {data.length !== 0 ? (
        <AnswerContainer>
          <AnswerList data={data} />
        </AnswerContainer>
      ) : null}
    </div>
  );
}
