import { Box } from "@mui/material";
import React from "react";

const Loops = () => {
  const array = ["one", "two", "three"];
  return (
    <Box m={2}>
      {array.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </Box>
  );
};

// const Loops = () => {
//   const array = ["one", "two", "three"];

//   return (
//     <Box m={2}>
//       {array.map((item, i) => (
//         <p key={i} style={{ margin: 0 }}>
//           {item}
//         </p>
//       ))}
//     </Box>
//   );
// };

export default Loops;
