import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const ConditionalRenderingMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <NavItem
            label="Conditional rendering"
            to={SANDBOX_ROUTES.CONDITIONAL_RENDERING_SANDBOX}
            color="white"
          />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default ConditionalRenderingMenu;
