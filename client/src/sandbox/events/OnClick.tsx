import React, { MouseEvent } from "react";
import Button from "@mui/material/Button";

/********* onClich no arguments **********/
// const OnClick = () => {
//   const handleClick = () => console.log("you clicked!!!");

//   return (
//     <Button variant="outlined" sx={{ m: 2 }} onClick={handleClick}>
//       Click me!!!
//     </Button>
//   );
// };

/********* onClich with arguments **********/
// const OnClick = () => {
//   const handleClick = (text: string) => console.log(text);

//   return (
//     <Button
//       variant="outlined"
//       sx={{ m: 2 }}
//       onClick={() => handleClick("hallo")}
//     >
//       Click me!!!
//     </Button>
//   );
// };

/********* onClich with events **********/
const OnClick = () => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  return (
    <>
      <Button variant="outlined" sx={{ m: 2 }} onClick={handleClick}>
        Click me one!!!
      </Button>
      <Button variant="outlined" sx={{ m: 2 }} onClick={(e) => handleClick(e)}>
        Click me two!!!
      </Button>
    </>
  );
};

export default OnClick;
