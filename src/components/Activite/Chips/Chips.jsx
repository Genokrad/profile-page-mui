import { Chip, Paper, Stack, Typography } from '@mui/material';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Chips = ({ item, index, actionDelFun, color }) => {
  const [chipsItem, setChipsItem] = useState(item);
  const [border, setBorder] = useState(true);

  useEffect(() => {
    if (item !== chipsItem) {
      return;
    }
    if (chipsItem.profession === 'Chef De Projet') {
      setChipsItem(prevState => ({
        ...prevState,
        ability: [],
      }));
      setBorder(false);
      console.log(chipsItem);
    }
  }, [chipsItem, item]);

  const handleChipDelete = data => {
    const updatedItem = { ...chipsItem };
    updatedItem.ability = updatedItem.ability.filter(i => i !== data);
    setChipsItem(updatedItem);
    actionDelFun(data, index, updatedItem, 'deleteSkils');
  };

  return (
    <Stack>
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          listStyle: 'none',
          p: 0.5,
          m: 0,
          border: border
            ? '1px solid rgba(0, 0, 0, 0.23)'
            : '1px dotted rgba(0, 0, 0, 0.23)',
          minHeight: '56px',
        }}
        elevation={0}
        component="ul"
      >
        {chipsItem.ability.length === 0 ? (
          <Typography
            sx={{
              fontWeight: 400,
              fontFamily: 'RedHatText',
              letterSpacing: '0.16px',
              padding: '11px',
            }}
            component={'p'}
          >
            Spécialités
          </Typography>
        ) : (
          chipsItem.ability.map(data => {
            return (
              <li key={nanoid()}>
                <Chip
                  sx={{
                    margin: '8px',
                    fontWeight: 400,
                    fontFamily: 'RedHatText',
                    letterSpacing: '0.16px',
                  }}
                  label={data}
                  size="medium"
                  onDelete={() => handleChipDelete(data)}
                  color={color}
                />
              </li>
            );
          })
        )}
      </Paper>
    </Stack>
  );
};
