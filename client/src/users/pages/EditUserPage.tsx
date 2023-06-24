import React, { useEffect } from "react";
import { useUser } from "../providers/UserProvider";
import useHandleUser from "../hooks/useHandleUser";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import editUserSchema from "../models/joi-schema/editUserSchema";
import ROUTES from "../../routes/routesModel";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import UserForm from "../components/UserForm";
import mapUserToModel from "../helpers/normalization/mapUserToModel";

const EditUserPage = () => {
  const { userId } = useParams();
  const { user } = useUser();
  const { handleEditUser, handleGetUser } = useHandleUser();
  const navigate = useNavigate();
  const { value, ...rest } = useForm(
    initialSignupForm,
    editUserSchema,
    handleEditUser
  );
  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, validateForm, setData } =
    rest;

  useEffect(() => {
    if (userId)
      handleGetUser(userId).then((userFromServer) => {
        if (userId !== userFromServer?._id) return navigate(ROUTES.ROOT);
        const modeledUser = mapUserToModel(userFromServer!);
        setData(modeledUser);
      });
  }, []);

  if (!user) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <Container sx={{ pt: 2 }}>
      <PageHeader
        title="Edit User Profile Page"
        subtitle="In order to make changes in your profile ,fill out the form fields you want to change and click the submit button"
      />
      <Container
        sx={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UserForm
          title="edit user information"
          data={data}
          errors={errors}
          onFormChange={validateForm}
          onInputChange={handleInputChange}
          onReset={handleReset}
          onSubmit={onSubmit}
          setData={setData}
        />
      </Container>
    </Container>
  );
};

export default EditUserPage;
