import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormButton from "./FormButton";

type BreakPointsKeysType = "xs" | "sm" | "md" | "lg" | "xl";
type BreakPointValueType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Props = {
  node: string;
  text: string;
  to: string;
  breakPoints?: Partial<Record<BreakPointsKeysType, BreakPointValueType>>;
};

const FormLink: React.FC<Props> = ({ text, to, breakPoints, node }) => {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} {...breakPoints}>
      <Box sx={{ maxWidth: "450px" }}>
        <Typography>{text}</Typography>
        <FormButton
          node={node}
          onClick={() => navigate(to)}
          variant="outlined"
          color="warning"
        />
      </Box>
    </Grid>
  );
};

export default FormLink;
