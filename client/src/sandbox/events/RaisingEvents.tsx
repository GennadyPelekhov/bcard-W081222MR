import React from "react";

type Props = {
  moshe: (x: string) => void;
};

const ChildComp: React.FC<Props> = ({ moshe }) => {
  return (
    <button
      style={{ padding: 8 }}
      onClick={() => moshe("You clicked the Child component!")}
    >
      Child component
    </button>
  );
};

const RaisingEvents = () => {
  const styles = {
    backgroundColor: "purple",
    color: "white",
    width: "350px",
    height: "350px",
    margin: 8,
  };
  const handleClick = (text: string) => console.log(text);

  return (
    <div style={styles} className="center">
      <div>
        <p>Father component</p>
        <ChildComp moshe={handleClick} />
      </div>
    </div>
  );
};

export default RaisingEvents;
