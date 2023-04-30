import {MainContainer,SecondaryContainer,Question,Answer} from './index.styled'

const AnswerList = (props) => {
  const { data } = props;
  //     const alldata=[{
  //         question: "What is the number of times Dhoni hit a six in World cup 2010?",
  //         Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
  //     },
  //     {
  //         question: "What is the number of times Dhoni hit a six in World cup 2010?",
  //         Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
  //     },
  //     {
  //         question: "What is the number of times Dhoni hit a six in World cup 2010?",
  //         Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
  //     },
  //     {
  //         question: "What is the number of times Dhoni hit a six in World cup 2010?",
  //         Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
  //     }
  // ]
  return (
    <>
      <MainContainer>
        {data.slice().reverse().map((param, index) => {
          return (
            <SecondaryContainer key={index}>
              <Question>{param.question}</Question>
              <Answer>{param.answer}</Answer>
            </SecondaryContainer>
          );
        })}
      </MainContainer>
    </>
  );
};

export default AnswerList;

