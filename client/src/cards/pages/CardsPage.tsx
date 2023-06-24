import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import Container from "@mui/material/Container";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

const CardsPage = () => {
  const { error, isLoading, filteredCards, handleGetCards, handleDeleteCard } =
    useCards();

  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeleteCard = async (cardId: string) => {
    await handleDeleteCard(cardId);
    await handleGetCards();
  };

  return (
    <Container sx={{ pt: 2 }}>
      <PageHeader
        title="Digital Business Card Application"
        subtitle="The paper business cards are no longer the best choice for your marketing. With increased competition and monetary constraints, you need to stay on top of your game by updating your marketing strategies. With Digital Business cards, new customers can view a company’s information in one place without having to carry around a bunch of papers. So STOP using paper and MOVE to digital ( it's more Environmentally Friendly ). For additional information visit our ABOUT page..."
      />
      <CardsFeedback
        onDelete={onDeleteCard}
        isLoading={isLoading}
        error={error}
        cards={filteredCards}
        onLike={() => {}}
      />
    </Container>
  );
};

export default CardsPage;
