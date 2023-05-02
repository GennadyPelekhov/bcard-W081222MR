import React from "react";
import MuiCard from "@mui/material/Card";
import CardInterface from "../../interfaces/CardInterface";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

type Props = {
  card: CardInterface;
  onDelete: (id: string) => void;
  // onEdit: (id: string) => void;
  onLike: (id: string) => void;
};

const Card: React.FC<Props> = ({ card, onDelete, onLike }) => {
  return (
    <MuiCard sx={{ minWidth: 280 }} raised>
      <CardHead image={card.image} />
      <CardBody card={card} />
      <CardActionBar
        onDelete={onDelete}
        onLike={onLike}
        // onEdit={onEdit}
        cardId={card._id}
      />
    </MuiCard>
  );
};

export default Card;
