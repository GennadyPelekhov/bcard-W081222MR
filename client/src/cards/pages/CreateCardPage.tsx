import React from "react";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import cardSchema from "../models/Joi/cardSchema";
import Container from "@mui/material/Container";
import CardForm from "../components/CardForm";
import initialCreateCard from "../helpers/initialForms/initialCreateCard";
import PageHeader from "../../components/PageHeader";

const CreateCardPage = () => {
  const { handleCreateCard } = useCards();
  const { user } = useUser();
  const { value, ...rest } = useForm(
    initialCreateCard,
    cardSchema,
    handleCreateCard
  );
  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, validateForm } = rest;

  if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Container sx={{ pt: 2 }}>
      <PageHeader
        title="Create New Business Card "
        subtitle="In order to create card ,fill out the form and click to submit button"
      />
      <Container
        sx={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardForm
          title="create business card"
          data={data}
          errors={errors}
          onFormChange={validateForm}
          onInputChange={handleInputChange}
          onReset={handleReset}
          onSubmit={onSubmit}
        />
      </Container>
    </Container>
  );
};

export default CreateCardPage;
