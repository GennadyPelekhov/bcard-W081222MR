import Container from "@mui/material/Container";
import React from "react";
import PageHeader from "./../../components/PageHeader";
import { useParams } from "react-router-dom";

const CardEditPage = () => {
  const params = useParams();
  return (
    <Container>
      <PageHeader
        title="Edit Business Card Page"
        subtitle="Here you can edit details of the business"
      />

      <div>Details of card: {params.cardId} </div>
    </Container>
  );
};

export default CardEditPage;
