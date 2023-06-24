import { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "./../../components/PageHeader";
import { useParams } from "react-router-dom";
import {
  CardMedia,
  Divider,
  Fab,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import useCards from "../hooks/useCards";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { useUser } from "../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import EditIcon from "@mui/icons-material/Edit";
import LocalMap from "../components/LocalMap";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

const CardDetailsPage = () => {
  const { user } = useUser();
  const { cardId } = useParams();
  const navigate = useNavigate();

  const { card, error, isLoading, handleGetCard } = useCards();

  useEffect(() => {
    if (cardId) handleGetCard(cardId);
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!isLoading && !card) return <p>No card to display ...</p>;
  if (!card) return <p>No card to display ...</p>;
  if (!isLoading && card)
    return (
      <Container sx={{ pt: 2 }}>
        <PageHeader
          title="Business Details"
          subtitle="Here you can find more details about the business"
        />
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 1000,
            flexGrow: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="row" spacing={2}>
                <Grid item xs>
                  <CardMedia
                    component="img"
                    alt={card.image.alt}
                    image={card.image.url}
                    sx={{
                      width: 400,
                      height: 200,
                      m: 2,
                      aspectRatio: "16/9",
                      objectFit: "cover",
                    }}
                  />
                  <Typography variant="h6" paddingLeft={2}>
                    Description:{" "}
                    <Typography variant="body1" component="span" fontSize={18}>
                      {" "}
                      {card.description}
                    </Typography>
                  </Typography>
                  <Typography variant="h6" paddingLeft={2}>
                    <PhoneForwardedOutlinedIcon color="primary" />:{" "}
                    <Link href={`tel:${card.phone}`} underline="hover">
                      {card.phone}
                    </Link>{" "}
                  </Typography>
                  <Typography variant="h6" paddingLeft={2}>
                    <MailOutlineOutlinedIcon color="primary" />:{" "}
                    <Link href={`mailto:${card.email}`} underline="hover">
                      {card.email}
                    </Link>{" "}
                  </Typography>
                  {card.web && (
                    <Typography variant="h6" paddingLeft={2}>
                      <LanguageOutlinedIcon color="primary" />:{" "}
                      <Link
                        href={card.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                      >
                        {card.web}
                      </Link>
                    </Typography>
                  )}
                  <Typography variant="h6" paddingLeft={2}>
                    Address:{" "}
                    <Typography variant="body1" component="span" fontSize={18}>
                      {" "}
                      {card.address.street} {card.address.houseNumber},{" "}
                      {card.address.city},{card.address.state}{" "}
                      {card.address.zip}, {card.address.country}
                    </Typography>
                  </Typography>
                  <Typography variant="h6" paddingLeft={2}>
                    Created at:{" "}
                    <Typography variant="body1" component="span" fontSize={18}>
                      {new Date(card.createdAt).toLocaleString()}
                    </Typography>
                  </Typography>
                  <Typography variant="h6" paddingLeft={2}>
                    Business number: {card.bizNumber}
                  </Typography>
                  <Typography variant="h6" paddingLeft={2}>
                    Likes: {card.likes.length}
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item padding={2} margin={2}>
                  <LocalMap address={card.address} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        {card.user_id === user?._id && (
          <Fab
            onClick={() => navigate(`${ROUTES.CARD_EDIT}/${cardId}`)}
            color="secondary"
            aria-label="edit card"
            title="Edit card"
            sx={{
              position: "absolute",
              bottom: 75,
              right: 16,
            }}
          >
            <EditIcon />
          </Fab>
        )}
      </Container>
    );
  return null;
};

export default CardDetailsPage;
