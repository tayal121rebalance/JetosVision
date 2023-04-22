import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
console.log("Print somethin in the console");

function initializeFileInput() {
  const fileName = document.querySelector(".fileName");

  const fileInput = document.querySelector("input[type=file]");
  console.log("Print cars", fileName);
  if (fileInput) {
    fileInput.addEventListener("change", function () {
      if (this.files && this.files[0]) {
        fileName.innerHTML = this.files[0].name;
      }
    });
  } else {
    console.error('fileInput not found');
  }
}

// Execute initializeFileInput once the DOM content has been loaded
document.addEventListener("DOMContentLoaded", initializeFileInput);
