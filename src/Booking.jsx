import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Navbar } from './Navbar';
import { DropDownComponent } from './DropDownComponent';
import { useNavigate } from 'react-router-dom';
import './Booking.css';
import BookingTable from './BookingTable';
const samplesData = [
  'EDTA-Blut',
  'Punktat_EDTA',
  'Serum',
  'Stuhl',
  'Serum+Plasma',
  'sonstiges-Material',
  'Sammelurin',
  'Citratplasma',
  'Urin',
  'EDTA-Plasma',
  'Zecke',
  'GlucoSpezial',
  'O',
  'C-Sensor-Probenr',
  'Punktat',
  'Vollblut',
  'Liquor',
  'Stein',
  'Citrat-Blut',
  'Serum+Urin',
  'Spezialröhrchen',
  'Speichel',
  'Glukose_Röhrchen',
  'Abstrich',
  'Ausstrich',
  'Kapillarblut_EDTA',
  'COBAS_PCR_Medium',
  'NaF-Plasma',
  'Heparin-Blut',
  'EDTA/Serum',
  'Dialysat',
  'Serum+Liquor',
  'Bronchiallavage',
  'NaF-Blut',
  'Biopsie',
  'Abstrich_trocken',
  'EDTA-Plasma/Serum',
  'Neutral-Monovettes',
  'Rollrandröhrchen',
  'ThromboExact',
  'Ejakulat',
  'Li-Hepa/Plasma',
  'Hämolysat',
  'Serum_ohne_TrennGel',
];

export const Booking = () => {
  const [samples, setSamples] = useState(samplesData);
  const [step, setStep] = useState(0);
  const [sampleCount, setSampleCount] = useState(1);
  const [selectedSamples, setSelectedSamples] = useState([]);
  // const navigate = useNavigate();
  // const navigateToBooking = () => {
  //   navigate('/');
  // };
  const addSampleNumber = () => {
    setSampleCount(sampleCount + 1);
  };
  const decreaseSampleNumber = () => {
    if (sampleCount > 1) {
      setSampleCount(sampleCount - 1);
    }
  };
  const resetSampleCounter = () => {
    setSampleCount(0);
  };
  const addNewSample = (sample) => {
    setSelectedSamples([...selectedSamples, { sample, sampleCount }]);
  };
  return (
    <>
      <Navbar />
      <Container className="counter">
        <h1 style={{ marginTop: '45px', color: 'black' }}>
          Welcome to the platform that eases your life
        </h1>
        <Box
          sx={{
            backgroundColor: '#D9D9D9',
            color: 'black',
            marginTop: '20px',
            width: '936px',
            height: '250px',
            borderRadius: '10px',
            paddingTop: '10px',
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            What is the sample that you need ?
            <DropDownComponent
              samples={samples}
              addSample={addNewSample}
            ></DropDownComponent>
          </div>
          <Box
            sx={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div>How many samples are you booking ?</div>
            <Box
              sx={{
                marginTop: '20px',
                backgroundColor: 'white',
                width: '169px',
                borderRadius: '10px',
                paddingTop: '5px',
              }}
            >
              <Button
                style={{
                  color: 'white',
                  backgroundColor: 'green',
                  width: '26px',
                  height: '28px',
                  fontSize: '25px',
                  minWidth: '0px',
                  fontFamily: 'Poppins',
                  marginRight: '20px',
                }}
                onClick={addSampleNumber}
              >
                +
              </Button>
              <span style={{ fontSize: '25px' }}> {sampleCount}</span>
              <Button
                style={{
                  color: 'white',
                  backgroundColor: 'red',
                  width: '26px',
                  height: '28px',
                  fontSize: '35px',
                  minWidth: '0px',
                  fontFamily: 'Poppins',
                  marginLeft: '20px',
                }}
                onClick={decreaseSampleNumber}
              >
                -
              </Button>
              <Button
                style={{ textTransform: 'none', color: '#cfd8dc' }}
                onClick={resetSampleCounter}
              >
                Reset
              </Button>
            </Box>
          </Box>
        </Box>
        <Box mt="15px">
          <Button
            sx={{
              backgroundColor: '#426CFF',
              color: 'white',
              textTransform: 'none',
              fontSize: '20px',
              width: '140px',
              marginRight: '40px',
              height: '80px',
            }}
            onClick={addNewSample}
          >
            Add new sample
          </Button>
          <Button
            sx={{
              backgroundColor: '#426CFF',
              color: 'white',
              textTransform: 'none',
              fontSize: '20px',
              width: '140px',
              marginLeft: '40px',
              height: '80px',
            }}
          >
            Book your drone now
          </Button>
        </Box>
        <BookingTable selectedSamples={selectedSamples}></BookingTable>
      </Container>
    </>
  );
};
