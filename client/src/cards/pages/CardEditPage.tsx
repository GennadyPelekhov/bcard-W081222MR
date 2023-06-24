import Container from "@mui/material/Container";
import React, { useEffect } from "react";
import PageHeader from "./../../components/PageHeader";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import useForm from "../../forms/hooks/useForm";
import initialCreateCard from "../helpers/initialForms/initialCreateCard";
import cardEditSchema from "../models/Joi/cardEditSchema";
import ROUTES from "../../routes/routesModel";
import mapCardToModel from "../helpers/normalizations/mapCardToModel";
import CardForm from "../components/CardForm";

const CardEditPage = () => {
  const { cardId } = useParams();
  const { user } = useUser();
  const { handleUpdateCard, handleGetCard } = useCards();

  const navigate = useNavigate();

  const { value, ...rest } = useForm(
    initialCreateCard,
    cardEditSchema,
    handleUpdateCard
  );

  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, setData, validateForm } =
    rest;

  useEffect(() => {
    if (cardId)
      handleGetCard(cardId).then((cardFromServer) => {
        if (user?._id !== cardFromServer!.user_id) return navigate(ROUTES.ROOT);
        const modeledCard = mapCardToModel(cardFromServer!);
        setData(modeledCard);
      });
  }, []);

  if (!user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Container sx={{ pt: 2 }}>
      <PageHeader
        title="Edit Business Card "
        subtitle={`Here you can edit details of the card:  ${cardId}`}
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
          title="edit card"
          onSubmit={onSubmit}
          onReset={handleReset}
          errors={errors}
          onFormChange={validateForm}
          onInputChange={handleInputChange}
          data={data}
        />
      </Container>
    </Container>
  );
};

export default CardEditPage;
