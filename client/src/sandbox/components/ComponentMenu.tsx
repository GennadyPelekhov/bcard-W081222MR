import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const ComponentMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <NavItem
            label="template"
            to={SANDBOX_ROUTES.TEMPLATE}
            color="white"
          />
          <NavItem label="logic" to={SANDBOX_ROUTES.LOGIC} color="white" />
          <NavItem label="styles" to={SANDBOX_ROUTES.STYLES} color="white" />
          <NavItem
            label="style module"
            to={SANDBOX_ROUTES.STYLE_MODULE}
            color="white"
          />
          <NavItem
            label="style test"
            to={SANDBOX_ROUTES.STYLE_TEST}
            color="white"
          />
          <NavItem
            label="string interpolation"
            to={SANDBOX_ROUTES.STRING_INTERPOLATION}
            color="white"
          />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default ComponentMenu;
