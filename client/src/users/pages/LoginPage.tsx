import Container from "@mui/material/Container";
import React from "react";
import PageHeader from "../../components/PageHeader";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import Joi from "joi";
import useForm from "../../forms/hooks/useForm";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import { Box, Typography } from "@mui/material";
import FormButton from "../../forms/components/FormButton";

type Data = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  // const user = false;
  //   const user = true;

  // if (user) return <Navigate replace to={ROUTES.ROOT} />;
  const INITIAL_LOGIN_FORM = {
    email: "",
    password: "",
  };

  const LOGIN_SCHEMA = {
    email: Joi.string().min(4).required(),
    password: Joi.string().min(8).required(),
  };
  const handleLogin = (data: Data) => {
    console.log(data);
    handleReset();
  };

  const { value, ...rest } = useForm(
    INITIAL_LOGIN_FORM,
    LOGIN_SCHEMA,
    handleLogin
  );
  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, validateForm } = rest;

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
          // marginTop: 8,
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
            onInputChange={handleInputChange}
            error={errors.email}
            data={data}
            // breakPoints={{ md: 6 }}
          />
          <Input
            label="password"
            name="password"
            onInputChange={handleInputChange}
            error={errors.password}
            data={data}
            // breakPoints={{ md: 6 }}
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
