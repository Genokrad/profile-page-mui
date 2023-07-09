import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';

export const Buttons = ({ text, fu, color, icone, textColor }) => {
  return (
    <Button
      onClick={fu}
      variant="contained"
      sx={{
        borderRadius: '6px',
        '& .MuiButton-startIcon': {
          marginRight: '10px',
        },
        backgroundColor: color,
        color: textColor,
      }}
      startIcon={icone ? <CreateIcon /> : null}
    >
      {text}
    </Button>
  );
};
