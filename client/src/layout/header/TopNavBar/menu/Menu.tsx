import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useUser } from "../../../../users/providers/UserProvider";
import MenuLink from "./MenuLink";
import ROUTES from "../../../../routes/routesModel";
import useHandleUser from "../../../../users/hooks/useHandleUser";

type Props = {
  isOpen: boolean;
  anchorEl: HTMLElement;
  onClose: () => void;
};

const Menu: React.FC<Props> = ({ isOpen, anchorEl, onClose }) => {
  const { user } = useUser();
  const { handleLogout } = useHandleUser();

  const onLogout = () => {
    handleLogout();
    onClose();
  };

  return (
    <MuiMenu
      open={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box>
        <MenuLink
          label="about"
          navigateTo={ROUTES.ABOUT}
          onClick={onClose}
          styles={{ display: { xs: "block", md: "none" } }}
        />

        {!user && (
          <>
            <MenuLink
              label="login"
              navigateTo={ROUTES.LOGIN}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
            <MenuLink
              label="signup"
              navigateTo={ROUTES.SINGUP}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
          </>
        )}
        {user && user.isBusiness && (
          <MenuLink
            label="my cards"
            navigateTo={ROUTES.MY_CARDS}
            onClick={onClose}
          />
        )}
        {user && (
          <>
            <MenuLink
              label="fav cards"
              navigateTo={ROUTES.FAV_CARDS}
              onClick={onClose}
            />
            <MenuLink
              label="profile"
              navigateTo={`${ROUTES.USER_PROFILE}/${user._id}`}
              onClick={onClose}
            />
            <MenuLink
              label="edit account"
              navigateTo={`${ROUTES.EDIT_USER}/${user._id}`}
              onClick={onClose}
            />

            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </>
        )}
      </Box>
    </MuiMenu>
  );
};

export default Menu;
