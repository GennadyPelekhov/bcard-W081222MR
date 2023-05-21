import Container from "@mui/material/Container";
import React from "react";
import PageHeader from "../../components/PageHeader";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../providers/UserProvider";

const SignupPage = () => {
  const { user } = useUser();

  if (user) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <Container>
      <PageHeader
        title="Signup Page"
        subtitle="In order to register ,fill out the form and click the submit button"
      />
    </Container>
  );
};

export default SignupPage;
