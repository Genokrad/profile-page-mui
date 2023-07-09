import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const DeleteButton = ({
  deleteProfession,
  index,
  updatedSkils,
  isMobile,
}) => {
  return (
    <IconButton
      onClick={() => deleteProfession('deleteProfession', index)}
      sx={{
        padding: '16px',
        color: '#D54942',
      }}
      disabled={updatedSkils.length < 2 ? true : false}
    >
      <DeleteIcon />
    </IconButton>
  );
};
