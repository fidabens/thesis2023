import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Navbar } from './Navbar';
import { DropDownComponent } from './DropDownComponent';
export const BookingDetail = (props) => {
  const [step, setStep] = useState(0);
  const [sampleCount, setSampleCount] = useState(0);
  return (
    <>
      <Navbar />
      <div>Welcome To the platform that eases your life</div>
      {step === 0 ? (
        <Container>
          <Box sx={{ color: 'black' }}>
            <DropDownComponent></DropDownComponent>
            <br />
            How many Materials are you booking ?
            <Box>
              <Button>+</Button>
              <div> {sampleCount}</div>
              <Button>-</Button>
              <Button>Reset</Button>
            </Box>
          </Box>
          <Button>Add new sample</Button>
          <Button>Book your drone now</Button>
        </Container>
      ) : step === 1 ? (
        <></>
      ) : (
        ''
      )}
    </>
  );
};
