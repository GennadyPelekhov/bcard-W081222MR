import React from "react";
import MuiCard from "@mui/material/Card";
import CardInterface from "../../models/interfaces/CardInterface";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

type Props = {
  card: CardInterface;
  onDelete: (id: string) => void;
  onLike: () => void;
};

const Card: React.FC<Props> = ({ card, onDelete, onLike }) => {
  const navigate = useNavigate();

  return (
    <MuiCard sx={{ minWidth: 280 }} raised>
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}
      >
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>
      <CardActionBar
        cardUserId={card.user_id}
        onDelete={onDelete}
        cardId={card._id}
        onLike={onLike}
        cardLikes={card.likes}
        phone={card.phone}
      />
    </MuiCard>
  );
};

export default Card;
