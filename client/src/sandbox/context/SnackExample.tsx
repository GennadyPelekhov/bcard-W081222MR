import React, { useState, MouseEvent } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import { Container } from "@mui/material";

const SnackExample = () => {
  const snack = useSnack();
  const [message, setMessage] = useState("");

  type Event = MouseEvent<HTMLButtonElement>;

  const fireSnack = (e: Event) => {
    e.preventDefault();
    snack("success", message);
    setMessage("");
  };

  return (
    <Container>
      <form>
        <h2>SnackExample</h2>
        <p>Message: {message}</p>
        <input type="text" onChange={(e) => setMessage(e.target.value)} />
        <button onClick={fireSnack}>Click Me</button>
      </form>
    </Container>
  );
};

export default SnackExample;
