import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const MuiSandboxMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <NavItem
            label="mui-button"
            to={SANDBOX_ROUTES.MUI_BUTTON}
            color="white"
          />
          <NavItem
            label="mui-divider"
            to={SANDBOX_ROUTES.MUI_DIVIDER}
            color="white"
          />
          <NavItem
            label="mui-typography"
            to={SANDBOX_ROUTES.MUI_TYPOGRAPHY}
            color="white"
          />
          <NavItem label="mui-box" to={SANDBOX_ROUTES.MUI_BOX} color="white" />
          <NavItem
            label="mui-container"
            to={SANDBOX_ROUTES.MUI_CONTAINER}
            color="white"
          />
          <NavItem
            label="mui-grid"
            to={SANDBOX_ROUTES.MUI_GRID}
            color="white"
          />
          <NavItem
            label="mui-stack"
            to={SANDBOX_ROUTES.MUI_STACK}
            color="white"
          />
          <NavItem
            label="mui-app-bar"
            to={SANDBOX_ROUTES.MUI_APP_BAR}
            color="white"
          />
          <NavItem
            label="mui-bottom-navigation"
            to={SANDBOX_ROUTES.MUI_BOTTOM_NAVIGATION}
            color="white"
          />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default MuiSandboxMenu;
