import React, { FC } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

type Props = {
  onClick: () => void;
};

const MoreButton: FC<Props> = ({ onClick }) => {
  return (
    <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
      <IconButton
        size="large"
        color="inherit"
        aria-label="menu"
        onClick={onClick}
        title="Open settings"
        sx={{ display: { xs: "inline-flex", md: "none" } }}
      >
        <MoreVertIcon />
      </IconButton>
    </Box>
  );
};

export default MoreButton;
