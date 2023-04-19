import React from "react";
import "./styleTest.css";

const StyleTest = () => {
  const purple: React.CSSProperties = {
    backgroundColor: "purple",
    color: "red",
  };
  let isGreen = true;
  //   isGreen = false;

  return (
    <>
      <h1 style={{ backgroundColor: "yellow" }}>title</h1>
      <h2 style={purple}>Subtitle</h2>
      <hr />
      <p className="green">Paragraph</p>
      <span style={{ backgroundColor: isGreen ? "green" : "blue" }}>SPAN</span>
    </>
  );
};

export default StyleTest;
