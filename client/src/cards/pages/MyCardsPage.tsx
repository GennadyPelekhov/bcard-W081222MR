import { useEffect } from "react";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import CardsFeedback from "../components/CardsFeedback";
import PageHeader from "../../components/PageHeader";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const MyCardsPage = () => {
  const { user } = useUser();
  const {
    cards,
    filteredCards,
    error,
    isLoading,
    handleGetMyCards,
    handleDeleteCard,
    handleLikeCard,
  } = useCards();
  const navigate = useNavigate();

  useEffect(() => {
    handleGetMyCards();
  }, []);

  const onDeleteCard = async (cardId: string) => {
    await handleDeleteCard(cardId);
    await handleGetMyCards();
  };

  if (!user || !user.isBusiness)
    return <Navigate replace to={ROUTES.MY_CARDS} />;

  return (
    <Container sx={{ pt: 2, position: "relative", minHeight: "92vh" }}>
      <PageHeader
        title="My Cards"
        subtitle="Here you can manage your business cards"
      />
      {cards && (
        <Fab
          onClick={() => navigate(ROUTES.CREATE_CARD)}
          color="primary"
          aria-label="add"
          title="Add new card"
          sx={{
            position: "absolute",
            bottom: 75,
            right: 16,
          }}
        >
          <AddIcon />
        </Fab>
      )}
      <CardsFeedback
        onDelete={onDeleteCard}
        onLike={() => handleLikeCard}
        isLoading={isLoading}
        error={error}
        cards={filteredCards}
      />
    </Container>
  );
};

export default MyCardsPage;
