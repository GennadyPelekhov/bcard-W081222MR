import React from "react";
import MuiCard from "@mui/material/Card";
import CardInterface from "../../interfaces/CardInterface";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

type Props = {
  card: CardInterface;
};

const Card: React.FC<Props> = ({ card }) => {
  const navigate = useNavigate();

  return (
    <MuiCard sx={{ minWidth: 280 }} raised>
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}
      >
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>
      <CardActionBar cardId={card._id} />
    </MuiCard>
  );
};

export default Card;
