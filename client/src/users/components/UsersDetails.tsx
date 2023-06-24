import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import React from "react";
import UserDetails from "./UserDetails";
import UserInterface from "../models/interfaces/UserInterface";
import Box from "@mui/material/Box";

type Props = {
  users: UserInterface[];
  onDelete: (id: string) => void;
  onBiz: (id: string) => void;
};

const UsersDetails: React.FC<Props> = ({ users, onDelete, onBiz }) => {
  return (
    <Box sx={{ overflow: "auto" }} component={Paper}>
      <Box
        sx={{
          width: "100%",
          display: "table",
          tableLayout: "fixed",
        }}
      >
        <Table aria-label="users table">
          <TableHead sx={{ backgroundColor: "#2EA1F1" }}>
            <TableRow>
              <TableCell align="center">No</TableCell>
              <TableCell align="center">Full Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">User ID</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Change Status?</TableCell>
              <TableCell align="center">Delete User?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <UserDetails
                user={user}
                num={index + 1}
                key={user._id}
                onBiz={onBiz}
                userId={user._id}
                onDelete={onDelete}
              />
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default UsersDetails;
