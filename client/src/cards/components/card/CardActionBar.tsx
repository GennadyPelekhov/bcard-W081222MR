import { Box, CardActions, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";

type Props = {
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onLike: (id: string) => void;
  cardId: string;
};

const CardActionBar: React.FC<Props> = ({
  onDelete,
  cardId,
  onEdit,
  onLike,
}) => {
  return (
    <CardActions disableSpacing sx={{ pt: 0, justifyContent: "space-between" }}>
      <Box>
        <IconButton onClick={() => onDelete(cardId)} aria-label="delete card">
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => onEdit(cardId)} aria-label="edit card">
          <EditIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton aria-label="call business">
          <PhoneIcon />
        </IconButton>
        <IconButton onClick={() => onLike(cardId)} aria-label="add to fav">
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions>
  );
};

export default CardActionBar;
