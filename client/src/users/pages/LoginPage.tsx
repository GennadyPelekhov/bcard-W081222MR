import Container from "@mui/material/Container";
import React from "react";
import PageHeader from "../../components/PageHeader";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import { Box, Typography } from "@mui/material";
import FormButton from "../../forms/components/FormButton";
import loginSchema from "../models/joi-schema/loginSchema";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import useHandleUser from "../hooks/useHandleUser";

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    handleLogin,
    value: { user },
  } = useHandleUser();

  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );
  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, validateForm } = rest;

  if (user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Container
      sx={{
        padding: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PageHeader
        title="Login Page"
        subtitle="In order to login ,fill out the form and click the submit button"
      />
      <Container
        sx={{
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          title="LOgiN"
          onSubmit={onSubmit}
          onReset={handleReset}
          onFormChange={validateForm}
          styles={{ maxWidth: "450px" }}
          spacing={2}
        >
          <Input
            label="email"
            name="email"
            type="email"
            onInputChange={handleInputChange}
            error={errors.email}
            data={data}
          />
          <Input
            label="password"
            name="password"
            type="password"
            onInputChange={handleInputChange}
            error={errors.password}
            data={data}
          />
        </Form>
      </Container>
      <Box sx={{ maxWidth: "450px" }}>
        <Typography>If you haven't registered yet , click here...</Typography>
        <FormButton
          node="register"
          onClick={() => navigate(ROUTES.SINGUP)}
          variant="outlined"
          color="secondary"
        />
      </Box>
    </Container>
  );
};

export default React.memo(LoginPage);
