import React, { useState } from "react";
import UserInterface from "../models/interfaces/UserInterface";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import FormButton from "../../forms/components/FormButton";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import UserDeleteDialog from "./UserDeleteDialog";

type Props = {
  userId: string;
  user: UserInterface;
  onDelete: (id: string) => void;
  onBiz: (id: string) => void;
  num: number;
};

const UserDetails: React.FC<Props> = ({
  user,
  num,
  onBiz,
  onDelete,
  userId,
}) => {
  const [isDialogOpen, setDialog] = useState(false);

  const handleDialog = (term?: string) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleBusiness = () => {
    onBiz(userId);
  };

  const onDeleteUser = () => {
    handleDialog();
    onDelete(userId);
  };

  return (
    <TableRow hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row" align="center">
        {num}
      </TableCell>
      <TableCell align="center">{`${user.name.first} ${user.name.middle} ${user.name.last}`}</TableCell>
      <TableCell align="center">{user.email}</TableCell>
      <TableCell align="center">{user.phone}</TableCell>
      <TableCell align="center">{`${user.address.street} ${user.address.houseNumber} ${user.address.city}`}</TableCell>
      <TableCell align="center">{user._id}</TableCell>
      <TableCell align="center">
        {user.isBusiness ? "Business user" : "Regular user"}
      </TableCell>
      <TableCell align="center">
        <FormButton
          node={user.isBusiness ? "Change to Regular" : "Change to Business"}
          onClick={handleBusiness}
          disabled={user.isAdmin}
          size="small"
        />
      </TableCell>
      <TableCell align="center">
        <FormButton
          node={<PersonRemoveIcon fontSize="large" sx={{ p: 1 }} />}
          onClick={() => handleDialog("open")}
          color="error"
          disabled={user.isAdmin}
          size="small"
        />
      </TableCell>
      <UserDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={onDeleteUser}
      />
    </TableRow>
  );
};

export default UserDetails;
