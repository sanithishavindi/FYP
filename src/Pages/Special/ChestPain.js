import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Box, Typography, Paper, Stack, IconButton } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DoneIcon from '@mui/icons-material/Done';


const ChestPain = () => {

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex,1);
    }

    setChecked(newChecked);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'green' }}>
            Chest Pain Resources
          </Typography>
          <LocalHospitalIcon sx={{ fontSize: 48, color: 'green' }} />
        </Stack>

        <List dense sx={{ mt: 4 }}>
          {['Stethoscope', 'ECG Machine', 'Patient Monitor', 'sphygmomanometer (blood pressure)', 'oxygen cylinder with regulator and mask kit', 'ambu bag with oxygen', 'crash cart(emergency drugs trolly)', 'Ultrasound machines'].map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(value)}
                    checked={checked.indexOf(value) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                    icon={<IconButton edge="end"><LocalHospitalIcon /></IconButton>}
                    checkedIcon={<IconButton edge="end"><DoneIcon sx={{ color: 'green' }} /></IconButton>}
                  />
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemText id={labelId} primary={value} sx={{ color: checked.indexOf(value) !== -1 ? 'green' : 'black' }} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </Box>
  )
}

export default ChestPain