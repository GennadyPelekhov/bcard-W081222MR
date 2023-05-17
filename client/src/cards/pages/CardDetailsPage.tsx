import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "./../../components/PageHeader";
import { useParams } from "react-router-dom";
import CardInterface from "../interfaces/CardInterface";
import Card from "../components/card/Card";
import { Box } from "@mui/material";
import useCards from "../hooks/useCards";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

const CardDetailsPage = () => {
  const { cardId } = useParams();

  const { card, error, isLoading, handleGetCard } = useCards();
  useEffect(() => {
    if (cardId) handleGetCard(cardId);
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!isLoading && !card) return <p>no card to display ...</p>;

  // const cards: CardInterface[] = [
  //   {
  //     _id: "abcd1",
  //     title: "First",
  //     subtitle: "subtitle",
  //     description: "testing 123",
  //     phone: "050-0000000",
  //     email: "test@gmail.com",
  //     web: "htpps://www.test.co.il",
  //     image: {
  //       url: "https://cdn.pixabay.com/photo/2023/04/15/17/08/bernese-mountain-dog-7928156_640.jpg",
  //       alt: "business card image",
  //     },
  //     address: {
  //       state: "hh",
  //       country: "Israel",
  //       city: "Tel Aviv",
  //       street: "Shenkin",
  //       houseNumber: 3,
  //       zip: 1234,
  //     },
  //     bizNumber: 1000001,
  //     user_id: "bsjkvhks54665gdsg1",
  //     likes: [],
  //     createdAt: new Date(),
  //   },
  //   {
  //     _id: "abcd2",
  //     title: "Apple",
  //     subtitle: "First",
  //     description: "testing 456",
  //     phone: "050-1111111",
  //     email: "apple@gmail.com",
  //     web: "https://www.apple.com",
  //     image: {
  //       url: "https://cdn.pixabay.com/photo/2014/02/01/17/30/apple-256268_960_720.jpg",
  //       alt: "Red apple",
  //     },
  //     address: {
  //       state: "CA",
  //       country: "USA",
  //       city: "Cupertino",
  //       street: "One Apple Park Way",
  //       houseNumber: 1,
  //       zip: 1234,
  //     },
  //     bizNumber: 1000002,
  //     user_id: "bsjkvhks54665gdsg2",
  //     likes: [],
  //     createdAt: new Date(),
  //   },
  //   {
  //     _id: "abcd3",
  //     title: "Alphabet",
  //     subtitle: "Second",
  //     description: "testing 789",
  //     phone: "050-2222222",
  //     email: "gogle@gmail.com",
  //     web: "htpps://www.google.com",
  //     image: {
  //       url: "https://cdn.pixabay.com/photo/2013/01/29/01/02/google-76522_960_720.png",
  //       alt: "business card image",
  //     },
  //     address: {
  //       state: "CA",
  //       country: "USA",
  //       city: "Mountain View",
  //       street: "Amphitheatre",
  //       houseNumber: 1600,
  //       zip: 1234,
  //     },
  //     bizNumber: 1000003,
  //     user_id: "bsjkvhks54665gdsg3",
  //     likes: [],
  //     createdAt: new Date(),
  //   },
  //   {
  //     _id: "abcd4",
  //     title: "Parrot",
  //     subtitle: "Third",
  //     description: "testing 000",
  //     phone: "050-3333333",
  //     email: "gogle@gmail.com",
  //     web: "htpps://www.google.com",
  //     image: {
  //       url: "https://cdn.pixabay.com/photo/2023/04/24/02/51/crimson-rosella-7947000_960_720.jpg",
  //       alt: "business card image",
  //     },
  //     address: {
  //       state: "NY",
  //       country: "USA",
  //       city: "New York",
  //       street: "Broadway",
  //       houseNumber: 15,
  //       zip: 1234,
  //     },
  //     bizNumber: 1000004,
  //     user_id: "bsjkvhks54665gdsg4",
  //     likes: [],
  //     createdAt: new Date(),
  //   },
  // ];

  // const card = cards.find((elem: CardInterface) => elem._id === params.cardId);

  if (!card) return <p>no card to display ...</p>;
  if (!isLoading && card)
    return (
      <Container>
        <PageHeader
          title="Business Details"
          subtitle="Here you can see details of the business"
        />
        <Box sx={{ maxWidth: 380 }}>
          <div>Details of card: {cardId} </div>
          <Card card={card} />
        </Box>
      </Container>
    );
  return null;
};

export default CardDetailsPage;
