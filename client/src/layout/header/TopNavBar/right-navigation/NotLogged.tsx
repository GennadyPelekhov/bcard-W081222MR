import React from "react";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import NavItem from "../../../components/NavItem";
import ROUTES from "../../../../routes/routesModel";

const NotLogged = () => {
  return (
    <Box>
      <NavItem label="Signup" to={ROUTES.SINGUP} />
      <NavItem label="Login" to={ROUTES.LOGIN} />
    </Box>
  );
};

export default NotLogged;
