import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
// import Cards from "../components/Cards";
// import CardInterface from "../interfaces/CardInterface";
import Container from "@mui/material/Container";
// import { getCards } from "../services/cardApi";
// import Spinner from "../../components/Spinner";
// import Error from "../../components/Error";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

const CardsPage = () => {
  const { cards, error, isLoading, handleGetCards } = useCards();

  useEffect(() => {
    handleGetCards();
  }, []);

  // const [isPending, setPending] = useState(false);
  // const [error, setError] = useState<null | string>(null);
  // const [cards, setCards] = useState<null | CardInterface[] | undefined>(null);

  // useEffect(() => {
  //   setPending(true);
  //   getCards()
  //     .then((data: CardInterface[] | undefined) => {
  //       setPending(false);
  //       setError(null);
  //       setCards(data);
  //     })
  //     .catch((err) => {
  //       setPending(false);
  //       setError(err.message);
  //       setCards(null);
  //     });
  // }, []);

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
  return (
    <Container sx={{ mt: 2 }}>
      <PageHeader
        title="Cards page"
        subtitle="On this page you can find all business cards from all categories"
      />
      <CardsFeedback isLoading={isLoading} error={error} cards={cards} />
    </Container>
  );
};

export default CardsPage;
