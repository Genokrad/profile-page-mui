import { useState } from 'react';

import { nanoid } from 'nanoid';
import { cloneDeep } from 'lodash'; // Импортируем функцию cloneDeep

import { Button, Divider, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import DeleteIcon from '@mui/icons-material/Delete';

import { TwoButtons } from 'components/Buttons/TwoButtons/TwoButtons';
import { Dropdown } from '../Dropdown/Dropdown';
import { Chips } from '../Chips/Chips';
import { ChipsToChose } from '../ChipsToChose/ChipsToChose';
import { DeleteButton } from './DeleteButton/DeleteButton';

const styleChenger = (isMobile, mark) => {
  return {
    textField: () => ({
      flexDirection: 'row',
      alignItems: 'center',
      width: !isMobile ? '50%' : '100%',
    }),
    buttonWraper: () => ({
      paddingTop: '24px',

      paddingRight: '24px',
      // justifyContent: !isMobile ? 'flex-end' : 'space-between',
      // paddingLeft: !isMobile ? '0' : '24px',
    }),
  }[mark];
};
export const SkilsActive = ({
  setCustomer,
  customer,
  toggler,
  alertOpen,
  isMobile,
}) => {
  const [updatedSkils, setUpdatedSkils] = useState(cloneDeep(customer?.skils)); // create deep copy of arr when initialise

  // function assigner
  const stateAssigner = (data, index, item, mark) => {
    setUpdatedSkils(prevSkils =>
      skillUpdater({ itemIndex: index, data, item, prevSkils, mark })
    );
  };

  const deleteProfession = (mark, index) => {
    setUpdatedSkils(prevSkils =>
      skillUpdater({ itemIndex: index, prevSkils, mark })
    );
  };

  const addProfession = (_, mark) => {
    setUpdatedSkils(prevSkils => skillUpdater({ prevSkils, mark }));
  };

  const skillUpdater = ({ itemIndex, data, item, prevSkils, mark }) => {
    const updatedSkilsCopy = cloneDeep(prevSkils); // create deep copy of arr

    // console.log({ itemIndex, data, item, prevSkils, mark });

    return {
      deleteSkils: () => {
        updatedSkilsCopy.map((skill, index) => {
          const conditionSkill =
            skill.profession === item.profession && index === itemIndex;

          return conditionSkill
            ? (skill.ability = skill.ability.filter(i => i !== data))
            : skill;
        });
        return updatedSkilsCopy;
      },

      addSkils: () => {
        updatedSkilsCopy.map((skill, index) => {
          const conditionSkill =
            skill.profession === item.profession && index === itemIndex;

          return conditionSkill ? skill.ability.push(data) : skill;
        });
        return updatedSkilsCopy;
      },

      newProfession: () => {
        updatedSkilsCopy.map((skill, index) => {
          const conditionSkill =
            skill.profession === item.profession && index === itemIndex;

          return conditionSkill ? (skill.profession = data) : skill;
        });
        return updatedSkilsCopy;
      },

      deleteProfession: () => {
        const conditionSkill = updatedSkilsCopy.length > 1;

        if (conditionSkill) {
          updatedSkilsCopy.splice(itemIndex, 1);
        }

        return updatedSkilsCopy;
      },

      addItem: () => {
        updatedSkilsCopy.push({
          id: updatedSkilsCopy.length,
          profession: '',
          ability: [],
        });
        return updatedSkilsCopy;
      },
    }[mark]();

    // switch (mark) {
    //   case 'deleteSkils':
    //     updatedSkilsCopy.map((skill, index) => {
    //       if (skill.profession === item.profession && index === itemIndex) {
    //         skill.ability = skill.ability.filter(i => i !== data);
    //         return skill;
    //       }
    //       return skill;
    //     });
    //     return updatedSkilsCopy;
    //   case 'addSkils':
    //     updatedSkilsCopy.map((skill, index) => {
    //       if (skill.profession === item.profession && index === itemIndex) {
    //         skill.ability.push(data);
    //       }
    //       return updatedSkilsCopy;
    //     });
    //     break;
    //   case 'newProfession':
    //     updatedSkilsCopy.map((skill, index) => {
    //       if (skill.profession === item.profession && index === itemIndex) {
    //         console.log(updatedSkils[index].profession);

    //         //If the form should remember everything except the boss, comment out this code / Если форма должна запоминать все кроме шеф, закоментировать данный код
    //         // if (prevSkils[index].profession === 'Chef De Projet') {
    //         //   console.log('Chef De Projet');
    //         //   skill.ability = [];
    //         // }
    //         //
    //         skill.profession = data;
    //       }
    //       return updatedSkilsCopy;
    //     });
    //     break;
    //   case 'deleteProfession':
    //     if (updatedSkilsCopy.length > 1) {
    //       updatedSkilsCopy.splice(itemIndex, 1);
    //     }
    //     break;
    //   case 'addItem':
    //     console.log(mark);
    //     updatedSkilsCopy.push({
    //       id: updatedSkilsCopy.length,
    //       profession: '',
    //       ability: [],
    //     });

    //     break;
    //   default:
    //     break;
    // }
    // return updatedSkilsCopy;
  };

  const updateUser = e => {
    e.preventDefault();
    let fieldValidation = [];

    updatedSkils.forEach(element => {
      if (fieldValidation.includes(element.profession)) {
        fieldValidation.push(1);
        alertOpen({
          isOpen: true,
          message: 'La valeur du champ Métier ne peut pas être répétée',
          error: true,
        });
        console.log('Metier содержит повторение', fieldValidation);
      }
      fieldValidation.push(element.profession);

      if (element.profession.length === 0) {
        fieldValidation.push(1);
        alertOpen({
          isOpen: true,
          message: 'Le champ Métier ne peut pas être vide',
          error: true,
        });
        console.log('Metier пуст', fieldValidation);
      }
    });

    if (fieldValidation.includes(1)) {
      fieldValidation = [];
      console.log('обнулил', fieldValidation);
      return;
    }

    console.log('updatedSkils', updatedSkils);

    setCustomer(prevCustomer => ({
      ...prevCustomer,
      skils: updatedSkils.map(item => {
        if (item.profession === 'Chef De Projet') {
          item.ability = [];
        }
        return item;
      }),
    }));
    toggler();
    alertOpen({
      isOpen: true,
      message: 'Votre profil a été mis à jour',
      error: false,
    });
    // console.log('customer', customer);
  };

  return (
    <form onSubmit={updateUser}>
      <Stack
        // justifyContent={'space-between'}
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
      >
        {updatedSkils &&
          updatedSkils.map((item, index) => (
            <Stack
              sx={{ alignItems: 'flex-start' }}
              key={nanoid()}
              direction={!isMobile ? 'row' : 'column'}
              padding={'16px'}
              gap={'16px'}
            >
              <Stack
                direction={!isMobile ? 'column' : 'row'}
                sx={{ width: !isMobile ? '50%' : '100%' }}
              >
                <Dropdown
                  item={item}
                  changeProfession={stateAssigner}
                  index={index}
                />
                {isMobile && (
                  <DeleteButton
                    deleteProfession={deleteProfession}
                    index={index}
                    updatedSkils={updatedSkils}
                    isMobile={isMobile}
                  />
                )}
              </Stack>

              <Stack sx={{ width: !isMobile ? '50%' : '100%' }}>
                <Chips
                  item={item}
                  index={index}
                  actionDelFun={stateAssigner}
                  color="primary"
                  setUpdatedSkils={setUpdatedSkils}
                />

                <ChipsToChose
                  item={item}
                  index={index}
                  handleAdd={stateAssigner}
                />
              </Stack>
              {!isMobile && (
                <DeleteButton
                  deleteProfession={deleteProfession}
                  index={index}
                  updatedSkils={updatedSkils}
                />
              )}
              {/* <IconButton
                onClick={() => deleteProfession('deleteProfession', index)}
                sx={{
                  padding: '16px',
                  color: '#D54942',
                }}
                disabled={updatedSkils.length < 2 ? true : false}
              >
                <DeleteIcon fontSize="large" />
              </IconButton> */}
            </Stack>
          ))}

        <Stack
          sx={{ alignItems: 'flex-end' }}
          divider={isMobile && <Divider orientation="horizontal" flexItem />}
        >
          <Button
            onClick={() => addProfession('some', 'addItem')}
            variant="text"
            startIcon={<AddCircleIcon />}
            size="big"
            sx={{
              fontFamily: 'RedHatMedium',
              margin: '22px 26px',
              width: '200px',
              borderRadius: '6px',
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.04);', // Replace with the desired background color
              },
            }}
          >
            Ajouter un métier
          </Button>

          <TwoButtons toggler={toggler} styleChenger={styleChenger} />
        </Stack>
      </Stack>
    </form>
  );
};
