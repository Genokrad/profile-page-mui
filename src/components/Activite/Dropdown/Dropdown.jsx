import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';

const options = [
  { id: 1, name: 'Développeur' },
  { id: 2, name: 'Lead Développeur' },
  { id: 3, name: 'Chef De Projet' },
];

export const Dropdown = ({ item, changeProfession, index }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = event => {
    // if (event.target.value === 'Chef De Projet') {
    //   setEmptyField(true);
    // } else {
    //   setEmptyField(false);
    // }
    setSelectedOption(event.target.value);

    changeProfession(event.target.value, index, item, 'newProfession');
  };

  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id="my-dropdown-label">Mètier</InputLabel>
      <Select
        labelId="my-dropdown-label"
        id="my-dropdown"
        value={
          typeof selectedOption === 'string' ? selectedOption : item.profession
        }
        onChange={handleChange}
        label="Mètier"
      >
        <MenuItem key={options[0].id} value={options[0].name}>
          {options[0].name}
        </MenuItem>
        <MenuItem key={options[1].id} value={options[1].name}>
          {options[1].name}
        </MenuItem>
        <MenuItem key={options[2].id} value={options[2].name}>
          {options[2].name}
        </MenuItem>
      </Select>
    </FormControl>
  );
};

// {options.map(option => (
//   <MenuItem key={option.id} value={option.name}>
//     {option.name}
//   </MenuItem>
// ))}
