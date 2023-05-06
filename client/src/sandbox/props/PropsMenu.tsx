import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const PropsMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <NavItem
            label="Father Props Object"
            to={SANDBOX_ROUTES.FATHER_PROPS_OBJECT}
            color="white"
          />
          <NavItem
            label="Father Props String"
            to={SANDBOX_ROUTES.FATHER_PROPS_STRING}
            color="white"
          />
          <NavItem
            label="Props TS"
            to={SANDBOX_ROUTES.PROPS_TS}
            color="white"
          />

          <NavItem
            label="Father Props Two Keys"
            to={SANDBOX_ROUTES.FATHER_PROPS_TWO_KEYS}
            color="white"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default PropsMenu;
