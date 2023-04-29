import { Divider, Typography } from "@mui/material";
import React from "react";

type Props = { title: string; subtitle: string };

const PageHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <>
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Typography variant="h5" component="h2">
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
};

export default PageHeader;
