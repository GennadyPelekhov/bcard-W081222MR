import React from "react";
import CardInterface from "../models/interfaces/CardInterface";
import { Grid } from "@mui/material";
import Card from "./card/Card";

type Props = {
  cards: CardInterface[];
  onDelete: (id: string) => void;
  onLike: () => void;
};

const Cards: React.FC<Props> = ({ cards, onDelete, onLike }) => {
  return (
    <Grid container spacing={2} p={2} justifyContent="center">
      {cards.map((card: CardInterface) => {
        return (
          <Grid item key={card._id} xs={12} sm={6} md={4}>
            <Card card={card} onDelete={onDelete} onLike={onLike} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Cards;
