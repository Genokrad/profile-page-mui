import { Box, Stack, TextField } from '@mui/material';

export const Input = ({ data, text, itemStyle, change, name, fieldType }) => {
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      sx={{ margin: '16px 0', padding: '0 24px', alignItems: 'center' }}
    >
      <Box sx={itemStyle} component="p">
        {text}
      </Box>
      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '50%',
        }}
      >
        <TextField
          sx={{
            width: '100%',
          }}
          onChange={e => change(e)}
          variant="outlined"
          value={data}
          // defaultValue="+38"
          name={name}
          type={fieldType}
        />
      </Stack>
    </Stack>
  );
};
