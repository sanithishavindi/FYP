import React, { useState } from 'react';
import { Box, Typography, Paper, Stack, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, IconButton } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DoneIcon from '@mui/icons-material/Done';

const Dislocation = () => {
  const [checked, setChecked] = useState([]);
  const [updateMessage, setUpdateMessage] = useState('');

  const resources = [
    { name: 'Emergency Stretchers', quantity: 5 },
    { name: 'Cervical Collar', quantity: 3 },
    { name: 'Patient Monitor', quantity: 2 },
    { name: 'Suturing Kit', quantity: 4 },
    { name: 'Crash Cart (Emergency Drugs Trolley)', quantity: 1 },
    { name: 'Surgical Masks', quantity: 10 },
    { name: 'Surgical Gloves', quantity: 15 }
  ];

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleUpdate = () => {
    const allMarked = resources.every(resource => checked.includes(resource.name));
    setUpdateMessage(allMarked ? "All required resources are marked and updated." : "Please mark all required resources before updating.");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'green' }}>
            Dislocation Resources
          </Typography>
          <LocalHospitalIcon sx={{ fontSize: 48, color: 'green' }} />
        </Stack>

        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Resource</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Select</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resources.map((resource) => {
                const isAvailable = resource.quantity > 0;
                const checkedStatus = checked.includes(resource.name);

                return (
                  <TableRow key={resource.name}>
                    <TableCell>{resource.name}</TableCell>
                    <TableCell>{resource.quantity}</TableCell>
                    <TableCell>
                      <Typography sx={{ color: isAvailable ? 'green' : 'red', fontWeight: 'bold' }}>
                        {isAvailable ? 'Available' : 'Low Stock'}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        edge="end"
                        onChange={handleToggle(resource.name)}
                        checked={checkedStatus}
                        icon={<IconButton edge="end"><LocalHospitalIcon /></IconButton>}
                        checkedIcon={<IconButton edge="end"><DoneIcon sx={{ color: 'green' }} /></IconButton>}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack direction="column" spacing={2} alignItems="center" sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdate}
            sx={{ width: '200px', fontWeight: 'bold' }}
          >
            Update
          </Button>
          {updateMessage && (
            <Typography sx={{ color: 'green', mt: 1, fontWeight: 'bold' }}>
              {updateMessage}
            </Typography>
          )}
        </Stack>
      </Paper>
    </Box>
  );
}

export default Dislocation;
