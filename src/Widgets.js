import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return(
      <> <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
    </>
     
    )
   
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      
      {newsArticle("Hi","you got 1000 readers")}
      {newsArticle("Request","you got new reauest")}
      {newsArticle("Bitcon","Bitcoin is at low of this year")}
      {newsArticle("Connect","Bhavin wants to cnnect with you")}
      {newsArticle("TATA","tata lauched its affordable ev")}
      {newsArticle("TCS","Became no 1 IT consulting firm ")}
    </div>
  );
}

export default Widgets;
