import React from "react";
import useName from "./useName";

const CustomName = () => {
  const { name, setName } = useName();

  return (
    <div>
      <p>Name: {name}</p>
      <input
        type="text"
        placeholder="Enter the name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
    </div>
  );
};

export default CustomName;
