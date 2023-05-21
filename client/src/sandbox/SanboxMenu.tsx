import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import NavItem from "../layout/components/NavItem";
import ROUTES, { SANDBOX_ROUTES } from "../routes/routesModel";
import { Navigate, Outlet } from "react-router-dom";
import { useTheme } from "../providers/ThemeProvider";
import { useUser } from "../users/providers/UserProvider";

const SanboxMenu = () => {
  const { isDark } = useTheme();
  const color = isDark ? "white" : "black";

  const { user } = useUser();
  if (!user || !user.isAdmin) return <Navigate to={ROUTES.ROOT} />;

  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="components"
            to={SANDBOX_ROUTES.COMPONENT}
            color={color}
          />
          <NavItem
            label="Conditional rendering"
            to={SANDBOX_ROUTES.CONDITIONAL_RENDERING}
            color={color}
          />
          <NavItem label="Events" to={SANDBOX_ROUTES.EVENTS} color={color} />
          <NavItem
            label="MUI-sandbox"
            to={SANDBOX_ROUTES.MUI_SANDBOX}
            color={color}
          />
          <NavItem label="PROPS" to={SANDBOX_ROUTES.PROPS} color={color} />
          <NavItem
            label="use state hook"
            to={SANDBOX_ROUTES.USE_STATE_HOOK}
            color={color}
          />
          <NavItem
            label="life cycle hooks"
            to={SANDBOX_ROUTES.LIFE_CYCLE_HOOKS}
            color={color}
          />
          <NavItem
            label="custom hooks"
            to={SANDBOX_ROUTES.CUSTOM}
            color={color}
          />
          <NavItem
            label="memoization"
            to={SANDBOX_ROUTES.MEMOIZATION}
            color={color}
          />
          <NavItem label="context" to={SANDBOX_ROUTES.CONTEXT} color={color} />
          <NavItem label="forms" to={SANDBOX_ROUTES.FORM} color={color} />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default SanboxMenu;
