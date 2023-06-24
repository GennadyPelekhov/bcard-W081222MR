import { useEffect } from "react";
import useHandleUser from "../hooks/useHandleUser";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Container, Typography } from "@mui/material";
import { useUser } from "../providers/UserProvider";
import ROUTES from "../../routes/routesModel";
import { Navigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import UsersDetails from "../components/UsersDetails";

const UsersPage = () => {
  const { value, handleGetUsers, handleBizUser, handleDeleteUser } =
    useHandleUser();
  const { isLoading, error, filteredUsers } = value;
  const { user } = useUser();

  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers]);

  const handleBusiness = async (userId: string) => {
    await handleBizUser(userId);
    await handleGetUsers();
  };

  const onDeleteUser = async (userId: string) => {
    await handleDeleteUser(userId);
    await handleGetUsers();
  };

  if (!user || !user.isAdmin) return <Navigate replace to={ROUTES.CRM} />;

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (filteredUsers && filteredUsers.length)
    return (
      <Container sx={{ pt: 2 }}>
        <PageHeader
          title="Admin CRM System"
          subtitle="Here you can see the details of all registered users"
        />
        <UsersDetails
          users={filteredUsers}
          onDelete={onDeleteUser}
          onBiz={handleBusiness}
        />
      </Container>
    );
  if (filteredUsers && !filteredUsers.length)
    return (
      <Typography variant="h3">
        Opps ,there are no users in the database that match the parameters you
        entered!
      </Typography>
    );
  return null;
};

export default UsersPage;
