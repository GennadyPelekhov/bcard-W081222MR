// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import { Toolbar } from "@mui/material";
// import NavItem from "../../layout/components/NavItem";
// import { SANDBOX_ROUTES } from "../../routes/routesModel";
// import { Outlet } from "react-router-dom";

// const LifeCycleHooksMenu = () => {
//   return (
//     <>
//       <AppBar position="sticky" color="primary">
//         <Toolbar>
//           <NavItem
//             label="Life cycle exe"
//             to={SANDBOX_ROUTES.LIFE_CYCLE_EXE}
//             color="white"
//           />
//         </Toolbar>
//       </AppBar>

//       <Outlet />
//     </>
//   );
// };

// export default LifeCycleHooksMenu;
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Outlet } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DrawerListItem from "../DrawerListItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";

const LifeCycleHooks = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <AppBar position="sticky" color="primary">
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
        >
          <ExpandMoreIcon />
        </IconButton>

        <Drawer anchor="top" open={isOpen} onClose={() => setOpen(false)}>
          <List>
            <DrawerListItem
              label="Initial"
              navigateTo={SANDBOX_ROUTES.INITIAL}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="useState"
              navigateTo={SANDBOX_ROUTES.LIFE_CYCLE_USE_STATE}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="mount"
              navigateTo={SANDBOX_ROUTES.DID_MOUNT}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="update"
              navigateTo={SANDBOX_ROUTES.DID_UPDATE}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="will Unmount"
              navigateTo={SANDBOX_ROUTES.WILL_UNMOUNT}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="No Dependencies"
              navigateTo={SANDBOX_ROUTES.NO_DEPENDENCIES}
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="exe"
              navigateTo={SANDBOX_ROUTES.LIFE_CYCLE_EXE}
              onClose={() => setOpen(false)}
              divider={false}
            />
          </List>
        </Drawer>

        <Toolbar sx={{ display: { xs: "none", md: "inline-flex" } }}>
          <NavItem label="Initial" to={SANDBOX_ROUTES.INITIAL} color="white" />
          <NavItem
            label="useState"
            to={SANDBOX_ROUTES.LIFE_CYCLE_USE_STATE}
            color="white"
          />
          <NavItem label="mount" to={SANDBOX_ROUTES.DID_MOUNT} color="white" />
          <NavItem
            label="update"
            to={SANDBOX_ROUTES.DID_UPDATE}
            color="white"
          />
          <NavItem
            label="will unmount"
            to={SANDBOX_ROUTES.WILL_UNMOUNT}
            color="white"
          />
          <NavItem
            label="no dependencies"
            to={SANDBOX_ROUTES.NO_DEPENDENCIES}
            color="white"
          />
          <NavItem
            label="exe"
            to={SANDBOX_ROUTES.LIFE_CYCLE_EXE}
            color="white"
          />
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
};

export default LifeCycleHooks;
