import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';

export const Buttons = ({ text, fu, color, icone, textColor }) => {
  return (
    <Button
      onClick={fu}
      variant="contained"
      sx={{
        borderRadius: '6px', // Adjust the border radius value as needed
        '& .MuiButton-startIcon': {
          marginRight: '10px', // Adjust the margin as needed
        },
        backgroundColor: color,
        color: textColor,
      }}
      startIcon={icone ? <CreateIcon /> : null} //why i cant use here icon from props ?
    >
      {text}
    </Button>
  );
};
