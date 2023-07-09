import { Divider, Stack } from '@mui/material';
import { Item } from '../Item/Item';
import { nanoid } from 'nanoid';
import React from 'react';

export const Skils = ({ data, isMobile }) => {
  return (
    <Stack
      direction="column"
      divider={isMobile ? null : <Divider orientation="horizontal" />}
    >
      {/* {console.log('data', data)} */}
      {/* <Item color="rgba(0, 0, 0, 0.38)" /> */}
      {data.skils.map((item, index) => (
        <React.Fragment key={nanoid()}>
          <Item color="#060506" data={item} isMobile={isMobile} />
          {isMobile && index === 0 && <Divider orientation="horizontal" />}
        </React.Fragment>
        // <Item key={nanoid()} color="#060506" data={item} isMobile={isMobile} />
      ))}
    </Stack>
  );
};
