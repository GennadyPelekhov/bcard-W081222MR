import React from "react";
import CardInterface from "../models/interfaces/CardInterface";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Cards from "./Cards";
import Typography from "@mui/material/Typography";

type Props = {
  isLoading: boolean;
  error: string | null;
  cards: CardInterface[] | null;
  onDelete: (id: string) => void;
  onLike: () => void;
};

const CardsFeedback: React.FC<Props> = ({
  isLoading,
  error,
  cards,
  onDelete,
  onLike,
}) => {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && cards.length)
    return <Cards cards={cards} onDelete={onDelete} onLike={onLike} />;
  if (cards && !cards.length)
    return (
      <Typography variant="h3">
        Opps ,there are no business cards in the database that match the
        parameters you entered!
      </Typography>
    );
  return null;
};

export default React.memo(CardsFeedback);
