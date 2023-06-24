import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import useHandleUser from "../hooks/useHandleUser";
import ROUTES from "../../routes/routesModel";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import Paper from "@mui/material/Paper";
import UserInterface from "../models/interfaces/UserInterface";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

const UserProfilePage = () => {
  const { userId } = useParams();
  const { user } = useUser();
  const { handleGetUser, value } = useHandleUser();
  const { isLoading, error } = value;
  const navigate = useNavigate();
  const [data, setData] = useState<UserInterface | null>(null);

  useEffect(() => {
    if (userId)
      handleGetUser(userId).then((userFromServer) => {
        if (userId !== userFromServer?._id) return navigate(ROUTES.ROOT);
        setData(userFromServer);
      });
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Container sx={{ pt: 2 }}>
      <PageHeader
        title="User Profile Page"
        subtitle="Here you can see details of your account"
      />
      <Box
        component={Paper}
        sx={{
          display: "flex",
          maxWidth: "600px",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "50vh",
          border: "1px solid black",
        }}
      >
        <Avatar
          alt={data?.image.alt}
          src={data?.image.url}
          sx={{ width: 150, height: 150, mt: 3 }}
        />
        <Grid container direction={"row"} spacing={1}>
          <Grid item xs={12} margin={2}>
            <Typography variant="h6" paddingLeft={4}>
              Name:{" "}
              <Typography variant="body1" component="span">
                {" "}
                {`${data?.name.first} ${data?.name.middle} ${data?.name.last}`}
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} margin={2}>
            <Typography variant="h6" paddingLeft={4}>
              Phone:{" "}
              <Typography variant="body1" component="span">
                {" "}
                {data?.phone}
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} margin={2}>
            <Typography variant="h6" paddingLeft={4}>
              Email:{" "}
              <Typography variant="body1" component="span">
                {" "}
                {data?.email}
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} margin={2}>
            <Typography variant="h6" paddingLeft={4}>
              Address:{" "}
              <Typography variant="body1" component="span">
                {" "}
                {data?.address.street} {data?.address.houseNumber},{" "}
                {data?.address.city},{data?.address.state} {data?.address.zip},{" "}
                {data?.address.country}
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} margin={2}>
            <Typography variant="h6" paddingLeft={4}>
              Business status:{" "}
              <Typography variant="body1" component="span">
                {data?.isBusiness ? "Business user" : "Regular user"}
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Fab
        onClick={() => navigate(`${ROUTES.EDIT_USER}/${userId}`)}
        color="secondary"
        aria-label="edit user"
        title="Edit user"
        sx={{
          position: "absolute",
          bottom: 75,
          right: 16,
        }}
      >
        <EditIcon />
      </Fab>
    </Container>
  );
};

export default UserProfilePage;
