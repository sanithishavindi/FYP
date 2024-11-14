import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, IconButton, Typography, Button, Paper, Stack } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DoneIcon from '@mui/icons-material/Done';

const ResourceList = ({ resources, onUpdate }) => {
  const [checked, setChecked] = useState([]);
  const [updateMessage, setUpdateMessage] = useState('');

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
    const allMarked = resources.every((resource) => checked.includes(resource.name));

    if (allMarked) {
      setUpdateMessage("All marked resources have been updated!");
      if (onUpdate) onUpdate(checked); // Pass the selected resources to the parent component if needed
    } else {
      setUpdateMessage("Please mark all resources needed before updating.");
    }
  };

  return (
    <TableContainer component={Paper}>
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
    </TableContainer>
  );
};

export default ResourceList;
