import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const CustomHookMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <NavItem
            label="custom counter"
            to={SANDBOX_ROUTES.CUSTOM_COUNTER}
            color="white"
          />
          <NavItem
            label="custom name"
            to={SANDBOX_ROUTES.CUSTOM_NAME}
            color="white"
          />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default CustomHookMenu;
