import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const fname = "Bhargav ";
const lname = "Chaturvedi";
// const curDate = new Date().toLocaleDateString();
// twmplete literal =``
// console.log(`name is ${lcname}`)
const curDate = new Date().toLocaleDateString();
const curTime = new Date().toLocaleTimeString();
const image1 = "https://picsum.photos/200/300";
const image2 = "https://picsum.photos/200/300";
const image3 = "https://picsum.photos/200/300";
const image4 = "https://picsum.photos/200/300";
const link = "https://github.com/";
// .heading {
//   color: mediumvioletred;
//   text-align: center;
//   text-transform: capitalize;
//   font-weight: bold;
//   text-shadow: 3px 4px 3px lightslategrey;
// }
const heading = {
  color: "mediumvioletred",
  textAlign: "center",
  textTransform: "capitalize",
  fontWeight: "bold",
  textShadow: "1px 4px 3px lightslategrey"
};

let curDate1 = new Date();
curDate1 = curDate1.getHours();
let greeting = "";
const gStyle = {};
if (curDate1 >= 1 && curDate1 < 12) {
  greeting = "Good Morning";
  gStyle.color = "green";
} else if (curDate1 >= 12 && curDate1 < 19) {
  greeting = "Good AfterNoon";
  gStyle.color = "#40ddf1";
} else {
  greeting = "Good Night";
  gStyle.color = "Red";
}

ReactDOM.render(
  <>
    <h1 style={heading} contentEditable="true">{`Name = ${fname} ${lname}`}</h1>
    <p className="para">
      My roll no. is {30 - 90 + 80 + 8} ,OTP is {Math.random()}
    </p>
    <p className="para">Current date is = {curDate}</p>
    <p className="para">Current time is = {curTime}</p>
    <div className="images">
      <img src={image1} alt="not loaded" />
      <img src={image2} alt="not loaded" />
      <img src={image3} alt="not loaded" />
      <a href={link} alt="not loaded">
        <img src={image4} alt="not loaded" />
      </a>
    </div>
    {/* let greeting = (curDate1 >= 1 && curDate1 < 12) ? "Good Morning" :
                (curDate1 >= 12 && curDate1 < 19) ? "Good Afternoon" :
                "Good Night"; */}
    <div className="greet">
      <h1>
        Hello Bhargav Sir and <span style={gStyle}>{greeting}</span>{" "}
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
