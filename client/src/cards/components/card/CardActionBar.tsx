import { Box, CardActions, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

type Props = {
  cardId: string;
};

const CardActionBar: React.FC<Props> = ({ cardId }) => {
  const navigate = useNavigate();

  const HandleCardEdit = () => navigate(`${ROUTES.CARD_EDIT}/${cardId}`);
  const HandleCardDelete = () => console.log(`You deleted card no: ${cardId}`);
  const HandleCardLike = () => console.log(`You liked card no: ${cardId}`);
  return (
    <CardActions disableSpacing sx={{ pt: 0, justifyContent: "space-between" }}>
      <Box>
        <IconButton
          title="Delete Card"
          onClick={HandleCardDelete}
          aria-label="delete card"
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          title="Edit Card"
          onClick={HandleCardEdit}
          aria-label="edit card"
        >
          <EditIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton aria-label="call business">
          <PhoneIcon />
        </IconButton>
        <IconButton
          title="Add to favorites"
          onClick={HandleCardLike}
          aria-label="add to fav"
        >
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions>
  );
};

export default CardActionBar;
