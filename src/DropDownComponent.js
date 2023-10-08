import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
export function DropDownComponent(props) {
  const [selectedSample, setSelectedSample] = useState('EDTA-Blut');
  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              sx={{
                width: 250,
                backgroundColor: '#007BFF',
                color: 'white',
                marginLeft: '10px',
                borderRadius: '15px',
                '&:hover': {
                  backgroundColor: 'black',
                  color: 'white',
                },
              }}
              {...bindTrigger(popupState)}
            >
              {selectedSample}
            </Button>
            <Menu {...bindMenu(popupState)}>
              {props.samples.map((sample) => (
                <MenuItem
                  onClick={() => {
                    console.log(sample);
                    popupState.close();
                    setSelectedSample(sample);
                    props.addSample(sample);
                  }}
                  key={sample}
                >
                  {sample}
                </MenuItem>
              ))}
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </>
  );
}
