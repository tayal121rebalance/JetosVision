import {
  FileContainer,
  MainContainer,
  ImageText,
  RemoveImage,
} from "./index.styled";
import BlankImage from "../../assests/icons/blankImage.png";
import CancelImage from "../../assests/icons/cancel.png";

const FileList = (props) => {
  const { files, onRemoveFile } = props;
  return (
    <FileContainer>
      {files.length > 0 ? (
        files.map((file, index) => {
          return (
            <MainContainer key={index}>
              <RemoveImage
                src={CancelImage}
                onClick={() => onRemoveFile(index)}
              />
              <img src={BlankImage} alt="blank_img" />
              <ImageText>
                {file.name.length > 15
                  ? file.name.substring(0, 20) + "..."
                  : file.name}
              </ImageText>
            </MainContainer>
          );
        })
      ) : (
        <div className="fileInputText">Oops! no files</div>
      )}
    </FileContainer>
  );
};

export default FileList;
