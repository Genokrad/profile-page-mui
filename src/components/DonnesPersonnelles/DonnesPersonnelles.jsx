import { Stack } from '@mui/material';
import { Title } from 'components/Title/Title';

import { Buttons } from 'components/Buttons/Buttons';
import { buttonWraper } from './styles';
import { useState } from 'react';
import { PersonalData } from 'components/PersonalData/PersonalData';
import { FormExample } from 'components/FormExample/FormExample';

const styleChenger = (isActive, mark) => {
  return {
    sectionWraper: () => ({
      borderRadius: '16px',
      backgroundColor: '#ffffff',
      padding: isActive ? '24px 0 24px 0' : '16px 0 16px 0',
    }),
  }[mark];
};

export const DonnesPersonnelles = ({
  customer,
  setCustomer,
  alertOpen,
  isMobile,
}) => {
  const [isActive, setIsActive] = useState(false);

  const toggler = () => {
    setIsActive(!isActive);
  };

  return (
    <Stack sx={styleChenger(isActive, 'sectionWraper')}>
      <Title text="Données personnelles" padding={true} />

      {!isActive && <PersonalData data={customer} isMobile={isMobile} />}
      {isActive && (
        <FormExample
          customer={customer}
          setCustomer={setCustomer}
          toggler={toggler}
          alertOpen={alertOpen}
          isMobile={isMobile}
        />
      )}

      {!isActive && (
        <Stack
          sx={buttonWraper}
          spacing={2}
          direction="row"
          justifyContent="flex-end"
        >
          <Buttons text="Editer" fu={toggler} icone={true} />
        </Stack>
      )}
    </Stack>
  );
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//  {Object.entries(customer).map(item => {
//           if (item[0] === 'id') {
//             return null;
//           }
//           if (item[0] === 'Statut' && isActive === true) {
//             return null;
//           }
//           if (item[0] === 'Statut' && isActive === false) {
//             return (
//               <Item
//                 key={item[0]}
//                 item={item}
//                 itemStyle={itemStyle}
//                 iconButton={true}
//                 Icone={CheckCircleIcon}
//                 isActive={isActive}
//               />
//             );
//           }

//           return (
//             <Item
//               key={item[0]}
//               item={item}
//               itemStyle={itemStyle}
//               iconButton={false}
//               isActive={isActive}
//               change={change}
//             />
//           );
//         })}
