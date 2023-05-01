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

  WorksContainerOne,
  WorksContainerOneText,
  WorkIconOne,
  WorkNumOne,

  WorksContainerTwo,
  WorksContainerTwoText,
  WorkIconTwo,
  WorkNumTwo,

  WorksContainerThree,
  WorksContainerThreeText,
  WorkIconThree,
  WorkNumThree,

  WorksContainerFour,
  WorksContainerFourText,
  WorkIconFour,
  WorkNumFour,

  AboutSection,
  FirstSection,
  FirstIcon,
  FirstHead,
  FirstPara,

  SecondSection,
  SecondIcon,
  SecondHead,
  SecondPara,

  ThirdSection,
  ThirdIcon,
  ThirdHead,
  ThirdPara


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

            <WorksContainerOne>
              <WorksContainerOneText>Define Your Project</WorksContainerOneText>
              <WorkIconOne></WorkIconOne>
              <WorkNumOne><span>01</span></WorkNumOne>

            </WorksContainerOne>

            <WorksContainerTwo>
              <WorksContainerTwoText>Upload all the project documents</WorksContainerTwoText>
              <WorkIconTwo></WorkIconTwo>
              <WorkNumTwo><span>02</span></WorkNumTwo>

            </WorksContainerTwo>

            <WorksContainerThree>
              <WorksContainerThreeText>Vision Processes your documents</WorksContainerThreeText>
              <WorkIconThree>
                <span className="one"></span>
              </WorkIconThree>
              <WorkNumThree><span>03</span></WorkNumThree>

            </WorksContainerThree>

            <WorksContainerFour>
              <WorksContainerFourText>Ask any question</WorksContainerFourText>
              <WorkIconFour></WorkIconFour>
              <WorkNumFour><span>04</span></WorkNumFour>

            </WorksContainerFour>

          </WorksContainer>
        </HowItWorks>

        <AboutSection>
          <FirstSection>
            <FirstIcon></FirstIcon>
            
            <FirstHead>Save hours wasted</FirstHead>
            
            <FirstPara>Go through thousands of lines of fine print in a matter of minutes. Once Vision processes your documents, get your questions answered in seconds.</FirstPara>
            
          </FirstSection>
          
          <SecondSection>
            <SecondIcon></SecondIcon>
            
            <SecondHead>Control your data</SecondHead>
            
            <SecondPara>Vision uses secure data rooms that don’t save your information. View all logs of access and delete them when you’re done</SecondPara>

          </SecondSection>
          
          <ThirdSection>
            <ThirdIcon></ThirdIcon>
            
            <ThirdHead>Accuracy you need</ThirdHead>
            
            <ThirdPara>Find the clause you’re looking for or a paraphrased version of it. Reference the exact locations in the source document.</ThirdPara>

          </ThirdSection>

        </AboutSection>

        

      </Blackwrapper>
    </>
  );
};

export default FileUpload;
