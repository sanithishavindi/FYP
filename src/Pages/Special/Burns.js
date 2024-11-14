import React, { useState } from 'react';
import { Box, Typography, Paper, Stack, IconButton, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DoneIcon from '@mui/icons-material/Done';

const Burns = () => {
  const [checked, setChecked] = useState([]);
  const [updateMessage, setUpdateMessage] = useState('');

  const resources = [
    { name: 'Suction Machine', quantity: 3 },
    { name: 'Emergency Stretchers', quantity: 5 },
    { name: 'Cervical Collar', quantity: 4 },
    { name: 'Crash Cart (Emergency Drugs Trolley)', quantity: 2 },
    { name: 'Stethoscope', quantity: 6 },
    { name: 'Sphygmomanometer (Blood Pressure)', quantity: 5 },
    { name: 'Intubation Cannula', quantity: 2 },
    { name: 'ECG Machine', quantity: 3 },
    { name: 'Central Venous Access Device', quantity: 2 },
    { name: 'Patient Monitor', quantity: 4 },
    { name: 'Blood Warmer', quantity: 2 },
    { name: 'Infusion Pump', quantity: 1 },
    { name: 'Oxygen Cylinder with Regulator and Mask Kit', quantity: 4 },
    { name: 'Laryngoscope', quantity: 3 },
    { name: 'Surgical Masks', quantity: 25 },
    { name: 'Surgical Gloves', quantity: 20 }
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

    if (allMarked) {
      setUpdateMessage("All marked resources have been updated!");
      // Add your update logic here, such as sending data to a backend or updating state.
    } else {
      setUpdateMessage("Please mark all resources needed before updating.");
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'green' }}>
            Burns Resources
          </Typography>
          <LocalHospitalIcon sx={{ fontSize: 48, color: 'green' }} />
        </Stack>

        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>Resource</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>Quantity</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>Mark Needed</TableCell>
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
};

export default Burns;
