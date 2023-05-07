import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const MemoizationMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <NavItem
            label="use-callback"
            to={SANDBOX_ROUTES.USE_CALLBACK}
            color="white"
          />
          <NavItem
            label="use-memo"
            to={SANDBOX_ROUTES.USE_MEMO}
            color="white"
          />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default MemoizationMenu;
