import React, { useState, MouseEvent } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import {
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const SnackExample = () => {
  const snack = useSnack();
  const [message, setMessage] = useState("");

  type Event = MouseEvent<HTMLButtonElement>;

  const fireSnack = (e: Event) => {
    e.preventDefault();
    snack("success", message);
    setMessage("");
  };

  // return (
  //   <Container>
  //     <form>
  //       <h2>SnackExample</h2>
  //       <p>Message: {message}</p>
  //       <input
  //         type="text"
  //         value={message}
  //         onChange={(e) => setMessage(e.target.value)}
  //       />
  //       <button onClick={fireSnack}>Click Me</button>
  //     </form>
  //   </Container>
  // );
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 350,
      }}
    >
      <InputBase
        onChange={(e) => setMessage(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter Snack Message"
        inputProps={{ "aria-label": "search google maps" }}
        value={message}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        onClick={fireSnack}
        color="primary"
        sx={{ p: "10px" }}
        aria-label="directions"
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default SnackExample;
