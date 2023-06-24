import { useState, useCallback, useEffect } from "react";
import CardInterface from "../models/interfaces/CardInterface";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardApi";
import useAxiosInterceptors from "../../hooks/useAxiosInterceptors";
import {
  CardFromClientType,
  CardMapToModelType,
} from "../models/types/cardTypes";
import normalizeCard from "../helpers/normalizations/normalizeCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSnack } from "../../providers/SnackbarProvider";
import ROUTES from "../../routes/routesModel";
import normalizeEditCard from "../helpers/normalizations/normalizeEditCard";
import { useUser } from "../../users/providers/UserProvider";

type ErrorType = null | string;
type CardsType = null | CardInterface[];
type CardType = null | CardInterface;

const useCards = () => {
  const { user } = useUser();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);
  const [card, setCard] = useState<CardType>(null);
  const [cards, setCards] = useState<CardsType>(null);
  const [query, setQuery] = useState("");
  const [filteredCards, setFilter] = useState<CardsType>(null);
  const [searchParams] = useSearchParams();

  useAxiosInterceptors();
  const navigate = useNavigate();
  const snack = useSnack();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (cards) {
      setFilter(
        cards.filter(
          (card) =>
            card.title.includes(query) || String(card.bizNumber).includes(query)
        )
      );
    }
  }, [cards, query]);

  const requestStatus = (
    loading: boolean,
    errorMessage: ErrorType,
    cards: CardsType,
    card: CardType = null
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
      return cards;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  }, []);

  const handleGetCard = async (cardId: string) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      setCard(card);
      return card;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleGetMyCards = async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleCreateCard = async (cardFromClient: CardFromClientType) => {
    try {
      setLoading(true);
      const normalizedCard = normalizeCard(cardFromClient);
      const card = await createCard(normalizedCard);
      requestStatus(false, null, null, card);
      snack("success", "A new business card has been created");
      navigate(ROUTES.MY_CARDS);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleUpdateCard = useCallback(
    async (cardFromClient: CardMapToModelType) => {
      try {
        setLoading(true);
        const normalizedCard = normalizeEditCard(cardFromClient);
        const cardFromServer = await editCard(normalizedCard);
        requestStatus(false, null, null, cardFromServer);
        snack("success", "The business card has been successfully updated");
        navigate(ROUTES.MY_CARDS);
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null);
      }
    },
    []
  );

  const handleDeleteCard = async (cardId: string) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      snack("success", "The business card has been successfully deleted");
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleLikeCard = useCallback(async (cardId: string) => {
    try {
      setLoading(true);
      const card = await changeLikeStatus(cardId);
      requestStatus(false, null, cards, card);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  }, []);

  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      const favCards = cards.filter(
        (card) => !!card.likes.find((id) => id === user?._id)
      );
      requestStatus(false, null, favCards);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  }, [user]);

  return {
    isLoading,
    error,
    cards,
    card,
    filteredCards,
    handleGetCards,
    handleGetCard,
    handleGetMyCards,
    handleCreateCard,
    handleUpdateCard,
    handleDeleteCard,
    handleLikeCard,
    handleGetFavCards,
  };
};

export default useCards;
