import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const EventsMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <NavItem
            label="On Click"
            to={SANDBOX_ROUTES.ON_CLICK}
            color="white"
          />
          <NavItem
            label="Raising Events"
            to={SANDBOX_ROUTES.RAISING_EVENTS}
            color="white"
          />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default EventsMenu;
