import React from "react";
import CardInterface from "../interfaces/CardInterface";
import { Container, Grid, Typography } from "@mui/material";
import Card from "./card/Card";

type Props = {
  cards: CardInterface[];
};

const Cards: React.FC<Props> = ({ cards }) => {
  // if (!cards.length)
  //   return (
  //     <>
  //       <Grid container mt={5} justifyContent="center">
  //         <Typography variant="h3">
  //           Opps ... it seems that there are no cards to display{" "}
  //         </Typography>
  //       </Grid>
  //     </>
  //   );
  return (
    <Container>
      <Grid container spacing={2} mt={2} justifyContent="center">
        {cards.map((card: CardInterface) => {
          return (
            <Grid item key={card._id} xs={12} sm={6} md={4}>
              <Card card={card} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Cards;
