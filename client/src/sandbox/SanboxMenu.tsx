import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import NavItem from "../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../routes/routesModel";
import { Outlet } from "react-router-dom";

const SanboxMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="components"
            to={SANDBOX_ROUTES.COMPONENT}
            color="black"
          />
          <NavItem
            label="Conditional rendering"
            to={SANDBOX_ROUTES.CONDITIONAL_RENDERING}
            color="black"
          />
          <NavItem label="Events" to={SANDBOX_ROUTES.EVENTS} color="black" />
          <NavItem
            label="MUI-sandbox"
            to={SANDBOX_ROUTES.MUI_SANDBOX}
            color="black"
          />
          <NavItem label="PROPS" to={SANDBOX_ROUTES.PROPS} color="black" />
          <NavItem
            label="use state hook"
            to={SANDBOX_ROUTES.USE_STATE_HOOK}
            color="black"
          />
          <NavItem
            label="life cycle hooks"
            to={SANDBOX_ROUTES.LIFE_CYCLE_HOOKS}
            color="black"
          />
          <NavItem
            label="custom hooks"
            to={SANDBOX_ROUTES.CUSTOM}
            color="black"
          />
          <NavItem
            label="memoization"
            to={SANDBOX_ROUTES.MEMOIZATION}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default SanboxMenu;
