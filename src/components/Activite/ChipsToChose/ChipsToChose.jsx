import { Chip, Paper } from '@mui/material';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const skilsVariant = [
  'JS',
  'HTML/CSS',
  'PHP',
  'Java',
  'React',
  'SQL',
  'React Native',
  'Vue',
  'iOS',
  'Android',
  'Flutter',
  'Symfony',
  'Drupal',
  'C/C++',
  'Perl / Shell',
  'Angular',
  '.Net',
  'BI',
  'IA',
  'Ruby',
];

export const ChipsToChose = ({ item, index, handleAdd }) => {
  let variantFromItem = item.ability;
  // const [variantFromItem, setVariantFromItem] = useState(item.ability);
  const [finalArr, setFinalArr] = useState(
    skilsVariant.filter(item => !variantFromItem.includes(item))
  );

  // if ()

  const someFu = data => {
    let updatedItem = [...finalArr];
    updatedItem = updatedItem.filter(item => item !== data);
    setFinalArr(updatedItem);
    handleAdd(data, index, item, 'addSkils');
  };

  // console.log(
  //   // { chipsVariants: chipsVariants },
  //   { variantFromItem: variantFromItem },
  //   { finalArr: finalArr }
  // );

  // const filterFunction = () => {
  //   const arr = [];
  //   arr.push();
  //   setFinalArr(arr);
  // };

  // const handleChipDelete = data => {
  //   const updatedItem = { ...chipsItem };
  //   updatedItem.ability = updatedItem.ability.filter(i => i !== data);
  //   setChipsItem(updatedItem);
  //   actionDelFun(data, index, updatedItem);
  // };

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      elevation={0}
      component="ul"
    >
      {item.profession === 'Chef De Projet'
        ? []
        : finalArr.map(data => {
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
                  size="small"
                  clickable={true}
                  onClick={() => someFu(data)}
                  // onDelete={() => handleChipDelete(data)}

                  variant="outlined"
                />
              </li>
            );
          })}
    </Paper>
  );
};
