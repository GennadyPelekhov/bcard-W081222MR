import Container from "@mui/material/Container";
import React from "react";
import PageHeader from "../../components/PageHeader";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../providers/UserProvider";
import useHandleUser from "../hooks/useHandleUser";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/joi-schema/signupSchema";
import UserForm from "../components/UserForm";
import FormLink from "../../forms/components/FormLink";

const SignupPage = () => {
  const { user } = useUser();
  const { handleSignup } = useHandleUser();
  const { value, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    handleSignup
  );

  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, validateForm, setData } =
    rest;

  if (user) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <Container
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PageHeader
        title="Signup Page"
        subtitle="In order to register ,fill out the form and click the submit button"
      />
      <FormLink
        node="login"
        text="Already registered? Click here..."
        to={ROUTES.LOGIN}
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
          data={data}
          errors={errors}
          onFormChange={validateForm}
          onInputChange={handleInputChange}
          onReset={handleReset}
          onSubmit={onSubmit}
          title="register user"
          setData={setData}
        />
      </Container>
    </Container>
  );
};

export default React.memo(SignupPage);
