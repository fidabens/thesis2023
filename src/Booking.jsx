import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router-dom';
import './Booking.css';
const samples = [
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
  const navigate = useNavigate();
  const [selectedSample, setSelectedSample] = useState(samples[0]);
  const navigateToBooking = () => {
    navigate('/');
  };
  return (
    <>
      <Navbar />
      <div className="counter">
        <h1>Welcome to the platform that eases your life</h1>
        <label htmlFor="position">
          What is the sample that you need ?
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button {...bindTrigger(popupState)}>{selectedSample}</Button>
                <Menu {...bindMenu(popupState)}>
                  {samples.map((sample) => (
                    <MenuItem
                      onClick={() => {
                        popupState.close();
                        setSelectedSample(sample);
                      }}
                    >
                      {sample}
                    </MenuItem>
                  ))}
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </label>

        <h1>How many samples are you booking ?</h1>
        <span className="counter__output"></span>
        <div className="btn__container">
          <button className="control__btn">+</button>
          <button className="control__btn">-</button>
          <button className="reset">Reset</button>
        </div>
      </div>
    </>
  );
};
