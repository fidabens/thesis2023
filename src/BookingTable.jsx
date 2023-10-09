import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function BookingTable(props) {
  const [addedSamples, setAddedSamples] = useState([]);
  const addSampleNumber = (sample) => {
    const selectedSampleIndex = addedSamples.findIndex(
      (item) => item.sample === sample
    );
    const editedSamples = addedSamples.map((item, index) => {
      if (index === selectedSampleIndex) {
        const newSampleCount = item.sampleCount + 1;
        return { ...item, sampleCount: newSampleCount };
      }
      return item;
    });
    setAddedSamples(editedSamples);
  };
  const decreaseSampleNumber = (sample) => {
    const selectedSampleIndex = addedSamples.findIndex(
      (item) => item.sample === sample
    );
    const editedSamples = addedSamples.map((item, index) => {
      if (index === selectedSampleIndex && item.sampleCount > 0) {
        const newSampleCount = item.sampleCount - 1;
        return { ...item, sampleCount: newSampleCount };
      }
      return item;
    });
    setAddedSamples(editedSamples);
  };
  const resetSampleCount = (sample) => {
    const selectedSampleIndex = addedSamples.findIndex(
      (item) => item.sample === sample
    );
    const editedSamples = addedSamples.map((item, index) => {
      if (index === selectedSampleIndex) {
        return { ...item, sampleCount: 1 };
      }
      return item;
    });
    setAddedSamples(editedSamples);
  };
  useEffect(() => {
    setAddedSamples(props.selectedSamples);
  }, [props.selectedSamples]);
  return (
    <TableContainer sx={{ mt: '10px' }} component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sample</TableCell>
            <TableCell align="left">Number Of materials</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {addedSamples.map((row) => (
            <TableRow
              key={row.sample}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.sample}
              </TableCell>
              <TableCell align="left">
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
                    onClick={() => {
                      addSampleNumber(row.sample);
                    }}
                  >
                    +
                  </Button>
                  <span style={{ fontSize: '25px' }}> {row.sampleCount}</span>
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
                    onClick={() => {
                      decreaseSampleNumber(row.sample);
                    }}
                  >
                    -
                  </Button>
                  <Button
                    style={{ textTransform: 'none', color: '#cfd8dc' }}
                    onClick={() => {
                      resetSampleCount(row.sample);
                    }}
                  >
                    Reset
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
