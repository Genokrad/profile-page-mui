import { Divider, Stack, TextField, Typography } from '@mui/material';
import { TwoButtons } from 'components/Buttons/TwoButtons/TwoButtons';
import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';
import * as yup from 'yup';

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

const validationSchema = yup.object().shape({
  lastName: yup
    .string()
    .matches(/^[a-zA-Z'-]+$/, 'Format de prénom invalide')
    .required('Champ obligatoire'),
  name: yup
    .string()
    .matches(/^[a-zA-Z'-]+$/, 'Format de nom invalide')
    .required('Champ obligatoire'),
  email: yup
    .string()
    .email("Format d'email incorrect")
    .required('Champ obligatoire'),
  phoneNumber: yup
    .string()
    .matches(/^[+]?[0-9\s]{0,15}$/, 'Format de nombre invalide')
    .required('Champ obligatoire'),
});

export const FormExample = ({
  customer,
  setCustomer,
  toggler,
  alertOpen,
  isMobile,
}) => {
  const initialValuesRef = useRef({
    lastName: '',
    name: '',
    email: '',
    phoneNumber: '',
  });

  let initialValues = initialValuesRef.current;

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      changeCustomerData(values);
      toggler();
      alertOpen({
        isOpen: true,
        message: 'Votre profil a été mis à jour',
        error: false,
      });
    },
  });

  useEffect(() => {
    // Update the initial values ref when the customer prop changes
    initialValuesRef.current = {
      lastName: customer?.lastName || '',
      name: customer?.name || '',
      email: customer?.email || '',
      phoneNumber: customer?.tel || '',
    };
    formik.setValues(initialValuesRef.current); // Update the formik values with new initial values
  }, [customer]); // eslint-disable-line

  // const formReset = () => {
  //   customerCleaner();
  //   formik.resetForm({ values: initialValuesRef.current });
  // };

  const changeCustomerData = values => {
    setCustomer(prevCustomer => ({
      ...prevCustomer,
      lastName: values.lastName,
      name: values.name,
      email: values.email,
      tel: values.phoneNumber,
    }));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack direction="column">
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          sx={{ margin: '16px 0', padding: '0 24px', alignItems: 'center' }}
        >
          {!isMobile && <Typography>Prénom</Typography>}
          <Stack sx={styleChenger(isMobile, 'textField')}>
            <TextField
              sx={{
                width: '100%',
              }}
              label={isMobile ? 'Prénom' : ''}
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Stack>
        </Stack>
        <Divider orientation="horizontal" flexItem />
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          sx={{ margin: '16px 0', padding: '0 24px', alignItems: 'center' }}
        >
          {!isMobile && <Typography>Nom</Typography>}
          <Stack sx={styleChenger(isMobile, 'textField')}>
            <TextField
              sx={{
                width: '100%',
              }}
              label={isMobile ? 'Nom' : ''}
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Stack>
        </Stack>
        <Divider orientation="horizontal" flexItem />
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          sx={{ margin: '16px 0', padding: '0 24px', alignItems: 'center' }}
        >
          {!isMobile && <Typography>Email</Typography>}
          <Stack sx={styleChenger(isMobile, 'textField')}>
            <TextField
              sx={{
                width: '100%',
              }}
              label={isMobile ? 'Email' : ''}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Stack>
        </Stack>
        <Divider orientation="horizontal" flexItem />
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          sx={{ margin: '16px 0', padding: '0 24px', alignItems: 'center' }}
        >
          {!isMobile && <Typography>Téléphone</Typography>}
          <Stack sx={styleChenger(isMobile, 'textField')}>
            <TextField
              sx={{
                width: '100%',
              }}
              label={isMobile ? 'Téléphone' : ''}
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />
          </Stack>
        </Stack>

        <Divider orientation="horizontal" flexItem />

        <TwoButtons
          toggler={toggler}
          styleChenger={styleChenger}
          isMobile={isMobile}
        />
      </Stack>
    </form>
  );
};
