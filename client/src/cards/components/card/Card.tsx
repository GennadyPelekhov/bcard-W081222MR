import React from "react";
import MuiCard from "@mui/material/Card";
import CardInterface from "../../interfaces/CardInterface";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

type Props = { card: CardInterface };

const Card: React.FC<Props> = ({ card }) => {
  // const card: CardInterface = {
  //   _id: "63765801e20ed868a69a62c4a",
  //   title: "first",
  //   subtitle: "subtitle",
  //   description: "testing 123",
  //   phone: "050-0000000",
  //   email: "test@gmail.com",
  //   web: "htpps://www.test.co.il",
  //   image: {
  //     url: "https://cdn.pixabay.com/photo/2023/04/15/17/08/bernese-mountain-dog-7928156_640.jpg",
  //     alt: "business card image",
  //   },
  //   address: {
  //     state: "hh",
  //     country: "Israel",
  //     city: "Tel Aviv",
  //     street: "Shenkin",
  //     houseNumber: 3,
  //     zip: 1234,
  //   },
  //   bizNumber: 1000000,
  //   user_id: "bsjkvhks54665gdsgs",
  //   likes: [],
  //   createdAt: new Date(),
  // };
  return (
    <MuiCard sx={{ minWidth: 280 }} raised>
      <CardHead image={card.image} />
      <CardBody card={card} />
      <CardActionBar />
    </MuiCard>
  );
};

export default Card;
