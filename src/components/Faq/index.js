import { Answer, Arrow, ArrowBox, FaqHead, FaqList, FaqSection, ListItem, Question } from "./index.styled"


const Faq = ()=>{
    return(
        <FaqSection>
          <FaqHead>FAQ</FaqHead>

          <FaqList>
            <ListItem>
              <Question>
                What is this application about?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>
                This application lets you chat with any PDF document you upload.
              </Answer>
            </ListItem>

            <ListItem>
              <Question>
                What if I have a question that the AI can't answer?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>
                If the answer lies in the uploaded PDF, then there’s a high
                likelihood that the AI will answer it correctly. Note that the
                AI is constantly learning, so if it cannot answer your question,
                you can always ask a different question.
              </Answer>
            </ListItem>

            <ListItem>
              <Question>
                Is there a limit to the size of the PDF document that can be
                uploaded?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>
                Yes, the maximum limit of the PDF document that can be uploaded
                is 20 MB.
              </Answer>
            </ListItem>

            <ListItem>
              <Question>
                Does Pagewhisperer have any limitations on the number of PDF
                documents that can be uploaded per day?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>
                No, there are no limitations on the number of PDF documents that
                can be uploaded per day.
              </Answer>
            </ListItem>

            <ListItem>
              <Question>
                Can I upload password-protected PDF documents to Pagewhisperer?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>
                No, you cannot upload password-protected PDF documents to
                AskYourPdf.
              </Answer>
            </ListItem>

            <ListItem>
              <Question>
                How long are the chat sessions saved on Pagewhisperer?{" "}
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>
                The chat session is available as long as the tab is open.
              </Answer>
            </ListItem>

            <ListItem>
              <Question>
                Can I use Pagewhisperer on any device?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>
                Yes, Pagewhisperer is accessible from any device with an
                internet connection.
              </Answer>
            </ListItem>
          </FaqList>
        </FaqSection>
    )
}

export default Faq