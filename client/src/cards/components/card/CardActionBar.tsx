import { Box, CardActions, IconButton } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { useUser } from "../../../users/providers/UserProvider";
import CardDeleteDialog from "./CardDeleteDialog";
import useCards from "../../hooks/useCards";

type Props = {
  cardId: string;
  cardUserId: string;
  onDelete: (id: string) => void;
  cardLikes: string[];
  onLike: () => void;
  phone: string;
};

const CardActionBar: React.FC<Props> = ({
  cardId,
  cardUserId,
  onDelete,
  cardLikes,
  onLike,
  phone,
}) => {
  const [isDialogOpen, setDialog] = useState(false);
  const { user } = useUser();
  const { handleLikeCard } = useCards();
  const [isLike, setLike] = useState(() => {
    if (!user) return false;
    return !!cardLikes.find((id) => id === user._id);
  });

  const navigate = useNavigate();

  const handleDialog = (term?: string) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleEditCard = () => navigate(`${ROUTES.CARD_EDIT}/${cardId}`);

  const handleDeleteCard = () => {
    handleDialog();
    onDelete(cardId);
  };

  const handleLike = async () => {
    setLike((prev) => !prev);
    await handleLikeCard(cardId);
    onLike();
  };

  return (
    <>
      <CardActions
        disableSpacing
        sx={{ pt: 0, justifyContent: "space-between" }}
      >
        <Box>
          {user && (user._id === cardUserId || user.isAdmin) && (
            <IconButton
              title="Delete Card"
              onClick={() => handleDialog("open")}
              aria-label="delete card"
            >
              <DeleteIcon />
            </IconButton>
          )}
          {user?._id === cardUserId && (
            <IconButton
              title="Edit Card"
              onClick={handleEditCard}
              aria-label="edit card"
            >
              <EditIcon />
            </IconButton>
          )}
        </Box>
        <Box>
          <IconButton
            aria-label="call business"
            title="Call to business"
            href={`tel:${phone}`}
          >
            <PhoneIcon />
          </IconButton>
          {user && (
            <IconButton
              title="Add to favorites"
              onClick={handleLike}
              aria-label="add to fav"
            >
              <FavoriteIcon color={isLike ? "error" : "inherit"} />
            </IconButton>
          )}
        </Box>
      </CardActions>
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handleDeleteCard}
      />
    </>
  );
};

export default CardActionBar;
