import React, { useState, useRef, useEffect } from "react";
import {
  FileInput,
  Textboxdrop,
  Blackwrapper,
  Whitetext,
  Bluetext,
  Textbox2,
  CreateButton,
  FileInputContainer,
  ImageIcon,
  FileInputDropBox,
  FileInputPlaceholder,
  FileListContainer,
  HowItWorks,
  HowItWorksText,
  WorksContainer,

  WorksContainerItem,
  WorksContainerText,
  WorkIcon,
  WorkNum,

  AboutSection,
  ItemSecion,
  ItemIcon,
  ItemHead,
  ItemPara,

  FaqSection,
  FaqHead,
  FaqList,
  ListItem,
  Question,
  ArrowBox,
  Arrow,
  Answer


} from "./index.styled";
import "./index.css";
import UploadLogo from "../../assests/icons/upload.png";
import FileList from "../FileList";
import WorkLogo1 from "./../../assests/work/workone.svg";

import { useNavigate } from "react-router-dom";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const onFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const MAX_FILES = 5;
    const MAX_FILE_SIZE = 1048576 * 10;
    let invalidFiles = [];
    if (newFiles.length > MAX_FILES) {
      invalidFiles.push(
        `You can upload a maximum of ${MAX_FILES} files at once`
      );
    }
    newFiles.forEach((file) => {
      if (file.size > MAX_FILE_SIZE) {
        invalidFiles.push(`${file.name} exceeds the maximum file size of 10MB`);
      }
    });

    if (invalidFiles.length > 0) {
      alert(invalidFiles.join("\n"));
      return;
    }
    setFiles((prevSelectedFiles) => [...prevSelectedFiles, ...newFiles]);
  };

  const onRemoveFile = (index) => {
    const newFileArray = files.filter((item, indexID) => indexID !== index);
    setFiles(newFileArray);
  };

  const onDragIn = () => {
    if (fileInputRef.current) {
      fileInputRef.current.classList.add(`dragOpacity`);
    }
  };
  const onDragOut = () => {
    if (fileInputRef.current) {
      fileInputRef.current.classList.remove(`dragOpacity`);
    }
  };
  const onDrop = () => {
    if (fileInputRef.current) {
      fileInputRef.current.classList.remove(`dragOpacity`);
    }
  };

  // useEffect(() => {
  //   console.log(files);
  // }, [files]);

  const uploadFiles = async (files) => {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {
      const response = await fetch("http://18.189.194.58:8081/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log(response);
        navigate('/askme');
      } else {
        throw Error("error uploading files");
      }
    } catch (error) {
      throw new Error(`Error uploading files: ${error.message}`);
    }
  };

  let btnBackground = files.length !== 0 ? "#FFFFFF" : "#1b1b1b";
  let btnTextColor = files.length !== 0 ? "#000000" : "#828282";
  return (
    <>
      <Blackwrapper>
        <Whitetext>Your Personal</Whitetext>
        <Bluetext>Research assistant</Bluetext>
        <Textbox2>
          Attach all documents you want to source information from
        </Textbox2>
        {files.length !== 0 && (
          <FileListContainer>
            <FileList files={files} onRemoveFile={onRemoveFile} />
          </FileListContainer>
        )}
        <FileInputContainer>
          <FileInputDropBox
            ref={fileInputRef}
            className="fileInput"
            onDragEnter={onDragIn}
            onDragLeave={onDragOut}
            onDrop={onDrop}
          >
            <FileInput
              className="fileInput"
              type="file"
              multiple
              onChange={onFileChange}
            ></FileInput>
            <FileInputPlaceholder>
              <ImageIcon src={UploadLogo} alt="upload_image" />
              <Textboxdrop>Choose/Drop PDF files</Textboxdrop>
            </FileInputPlaceholder>
          </FileInputDropBox>
        </FileInputContainer>
        <CreateButton
          onClick={() => uploadFiles(files)}
          style={{ background: btnBackground, color: btnTextColor }}
        >
          Create assistant
        </CreateButton>


        <HowItWorks>
          <HowItWorksText>How It Works</HowItWorksText>

          <WorksContainer>

            <WorksContainerItem>
              <WorksContainerText>Define Your Project</WorksContainerText>
              <WorkIcon></WorkIcon>
              <WorkNum><span>01</span></WorkNum>

            </WorksContainerItem>

            <WorksContainerItem>
              <WorksContainerText>Upload all the project documents</WorksContainerText>
              <WorkIcon></WorkIcon>
              <WorkNum><span>02</span></WorkNum>

            </WorksContainerItem>

            <WorksContainerItem>
              <WorksContainerText>Vision Processes your documents</WorksContainerText>
              <WorkIcon>
                <span className="one"></span>
              </WorkIcon>
              <WorkNum><span>03</span></WorkNum>

            </WorksContainerItem>

            <WorksContainerItem>
              <WorksContainerText>Ask any question</WorksContainerText>
              <WorkIcon></WorkIcon>
              <WorkNum><span>04</span></WorkNum>

            </WorksContainerItem>

          </WorksContainer>
        </HowItWorks>

        <AboutSection>
          <ItemSecion>
            <ItemIcon></ItemIcon>
            <ItemHead>Save hours wasted</ItemHead>
            <ItemPara>Go through thousands of lines of fine print in a matter of minutes. Once Vision processes your documents, get your questions answered in seconds.</ItemPara>

          </ItemSecion>

          <ItemSecion>
            <ItemIcon></ItemIcon>
            <ItemHead>Control your data</ItemHead>
            <ItemPara>Vision uses secure data rooms that don’t save your information. View all logs of access and delete them when you’re done</ItemPara>

          </ItemSecion>

          <ItemSecion>
            <ItemIcon></ItemIcon>
            <ItemHead>Accuracy you need</ItemHead>
            <ItemPara>Find the clause you’re looking for or a paraphrased version of it. Reference the exact locations in the source document.</ItemPara>

          </ItemSecion>

        </AboutSection>

        <FaqSection>
          <FaqHead>FAQ</FaqHead>

          <FaqList>
            <ListItem>
              <Question>What is this application about?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>This application lets you chat with any PDF document you upload.</Answer>
            </ListItem>

            <ListItem>
              <Question>What if I have a question that the AI can't answer?<ArrowBox>
                <Arrow>^</Arrow>
              </ArrowBox>
              </Question>
              <Answer>If the answer lies in the uploaded PDF, then there’s a high likelihood that the AI will answer it correctly. Note that the AI is constantly learning, so if it cannot answer your question, you can always ask a different question.</Answer>
            </ListItem>

            <ListItem>
              <Question>Is there a limit to the size of the PDF document that can be uploaded?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>Yes, the maximum limit of the PDF document that can be uploaded is 20 MB.</Answer>
            </ListItem>

            <ListItem>
              <Question>Does vision have any limitations on the number of PDF documents that can be uploaded per day?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>No, there are no limitations on the number of PDF documents that can be uploaded per day.</Answer>
            </ListItem>

            <ListItem>
              <Question>Can I upload password-protected PDF documents to Vision?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>No, you cannot upload password-protected PDF documents to AskYourPdf.</Answer>
            </ListItem>

            <ListItem>
              <Question>How long are the chat sessions saved on Vision?         <ArrowBox>
                <Arrow>^</Arrow>
              </ArrowBox>
              </Question>
              <Answer>The chat session is available as long as the tab is open.</Answer>
            </ListItem>

            <ListItem>
              <Question>Can I use vision on any device?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>Yes, Vision is accessible from any device with an internet connection.</Answer>
            </ListItem>

          </FaqList>

        </FaqSection>


      </Blackwrapper>
    </>
  );
};

export default FileUpload;
