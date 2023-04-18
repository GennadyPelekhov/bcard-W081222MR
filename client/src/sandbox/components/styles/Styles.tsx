import React, { CSSProperties } from "react";

const Styles = () => {
  //   const test: React.CSSProperties = {
  //     backgroundColor: "blueviolet",
  //     color: "white",
  //     fontWeight: "bold",
  //     fontSize: "2rem",
  //   };

//   return (
//     <div style={{ backgroundColor: "blueviolet", color: "white" }}>Styles</div>
//   );

    const test: CSSProperties = {
      backgroundColor: "blueviolet",
      color: "white",
      fontWeight: "bold",
      fontSize: "2rem",
    };

    return <div style={test}>Styles</div>;
};

export default Styles;
