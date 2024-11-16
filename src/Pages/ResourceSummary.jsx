import React, { useState } from 'react';
import { Box, Paper, Typography, List, ListItem, Checkbox, IconButton, Stack, Collapse, Divider } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DoneIcon from '@mui/icons-material/Done';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const resourceData = {
  DengueFever: [
    { name: 'ECG Monitor', quantity: 3 },
    { name: 'Infusion Pump', quantity: 1 },
    { name: 'Crash Cart', quantity: 0 },
    { name: 'Syringe Pump', quantity: 5 },
  ],
  CardiacArrest: [
    { name: 'Defibrillator', quantity: 2 },
    { name: 'Stethoscope', quantity: 5 },
    { name: 'Ventilators', quantity: 1 },
    { name: 'ECG Machine', quantity: 0 },
    { name: 'Cardiac Monitor', quantity: 3 },
    { name: 'Sphygmomanometer (Blood Pressure)', quantity: 4 },
    { name: 'Oxygen Cylinder with Regulator and Mask Kit', quantity: 2 },
    { name: 'Ambu Bag with Oxygen', quantity: 1 },
    { name: 'Intubation Cannula', quantity: 6 },
    { name: 'Laryngeal Mask Airways', quantity: 0 },
    { name: 'Crash Cart (Emergency Drugs Trolley)', quantity: 1 },
    { name: 'Ultrasound Machines', quantity: 2 },
    { name: 'Suction Machine', quantity: 3 },
    { name: 'Central Venous Access Device', quantity: 0 },
  ],
  ChestPain: [
    { name: 'Stethoscope', quantity: 2 },
    { name: 'ECG Machine', quantity: 1 },
    { name: 'Patient Monitor', quantity: 3 },
    { name: 'Sphygmomanometer (blood pressure)', quantity: 1 },
    { name: 'Oxygen cylinder with regulator and mask kit', quantity: 0 },
    { name: 'Ambu bag with oxygen', quantity: 1 },
    { name: 'Crash cart (emergency drugs trolley)', quantity: 0 },
    { name: 'Ultrasound machine', quantity: 2 },
  ],
  AllergicReaction:[
    { name: 'ECG Monitor', quantity: 1 },
    { name: 'Infusion Pump', quantity: 2 },
    { name: 'Crash Cart', quantity: 1 },
    { name: 'Syringe Pump', quantity: 0 }
  ],
  EaracheToothache: [
    { name: 'Crash Cart (emergency drugs trolley)', quantity: 1 },
    { name: 'Suction Machine', quantity: 2 },
    { name: 'Surgical Masks', quantity: 10 },
    { name: 'Surgical Gloves', quantity: 20 }
  ],

  ShortnessOfBreath: [
    { name: 'Crash Cart', quantity: 1 },
    { name: 'Oxygen Cylinder', quantity: 2 },
    { name: 'Ambu Bag', quantity: 1 },
    { name: 'Nebulizer', quantity: 2 },
    { name: 'Stethoscope', quantity: 3 },
  ],
  Poisoning: [
    { name: 'Suction Machine', quantity: 2 },
    { name: 'Crash Cart', quantity: 1 },
    { name: 'Stethoscope', quantity: 2 },
    { name: 'Patient Monitor', quantity: 1 },
    { name: 'Surgical Gloves', quantity: 10 },
  ],
  TraumaticInjury: [
    { name: 'ECG Monitor', quantity: 1 },
    { name: 'Infusion Pump', quantity: 2 },
    { name: 'Crash Cart', quantity: 1 },
    { name: 'Syringe Pump', quantity: 2 },
  ],
  Dislocation: [
    { name: 'Emergency Stretchers', quantity: 3 },
    { name: 'Cervical Collar', quantity: 2 },
    { name: 'Patient Monitor', quantity: 1 },
    { name: 'Crash Cart', quantity: 1 },
  ],
  Fracture: [
    { name: 'Emergency Stretchers', quantity: 2 },
    { name: 'Sphygmomanometer', quantity: 4 },
    { name: 'Oxygen Cylinder', quantity: 1 },
    { name: 'Crash Cart', quantity: 1 },
  ],
  SnakeBite: [
    { name: 'Crash Cart (Emergency Drugs Trolley)', quantity: 2 },
    { name: 'Emergency Stretchers', quantity: 4 },
    { name: 'Stethoscope', quantity: 6 },
    { name: 'Sphygmomanometer (Blood Pressure)', quantity: 5 },
    { name: 'ECG Machine', quantity: 3 },
    { name: 'Infusion Pump', quantity: 1 },
    { name: 'Oxygen Cylinder with Regulator and Mask Kit', quantity: 3 },
    { name: 'Surgical Masks', quantity: 20 },
    { name: 'Surgical Gloves', quantity: 15 },
    { name: 'Syringe Pump', quantity: 4 }
  ],
  Burns: [
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
  ],
};

const calculateSummary = () => {
  const summary = {};
  Object.values(resourceData).forEach((category) => {
    category.forEach(({ name, quantity }) => {
      summary[name] = (summary[name] || 0) + quantity;
    });
  });
  return summary;
};

const ResourceSummary = () => {
  const [expanded, setExpanded] = useState({});
  const [checked, setChecked] = useState({});

  const handleExpand = (category) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const handleToggle = (category, item) => {
    setChecked((prev) => ({
      ...prev,
      [category]: { ...prev[category], [item]: !prev[category]?.[item] },
    }));
  };

  const summary = calculateSummary();

  return (
    <Box sx={{ p: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4, backgroundColor: '#fff' }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#2c7a7b',
            textAlign: 'center',
            mb: 3,
            textTransform: 'uppercase',
          }}
        >
          Hospital Resource Summary
        </Typography>
        {Object.entries(resourceData).map(([category, items]) => (
          <Box key={category} sx={{ mb: 3 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              onClick={() => handleExpand(category)}
              sx={{
                cursor: 'pointer',
                p: 2,
                backgroundColor: '#e6fffa',
                borderRadius: 2,
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c7a7b' }}>
                {category} Resources
              </Typography>
              <IconButton>
                {expanded[category] ? (
                  <ExpandLessIcon sx={{ color: '#2c7a7b' }} />
                ) : (
                  <ExpandMoreIcon sx={{ color: '#2c7a7b' }} />
                )}
              </IconButton>
            </Stack>
            <Collapse in={expanded[category]}>
              <List dense sx={{ mt: 2, pl: 3 }}>
                {items.map(({ name, quantity }) => (
                  <ListItem
                    key={name}
                    disablePadding
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      p: 1,
                      borderBottom: '1px solid #e2e8f0',
                    }}
                  >
                    <Checkbox
                      checked={checked[category]?.[name] || false}
                      onChange={() => handleToggle(category, name)}
                      icon={<LocalHospitalIcon sx={{ color: '#2c7a7b' }} />}
                      checkedIcon={<DoneIcon sx={{ color: '#38a169' }} />}
                      sx={{ mr: 2 }}
                    />
                    <Typography sx={{ flex: 1, color: '#4a5568', fontWeight: 'bold' }}>{name}</Typography>
                    <Typography
                      sx={{
                        color: '#2c7a7b',
                        fontWeight: 'bold',
                        backgroundColor: '#e6fffa',
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      Quantity: {quantity}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
        <Divider sx={{ my: 4 }} />
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3, color: '#2c7a7b' }}
          >
            Total Resource Summary
          </Typography>
          <List dense sx={{ pl: 3 }}>
            {Object.entries(summary).map(([resource, quantity]) => (
              <ListItem
                key={resource}
                disablePadding
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 1,
                  borderBottom: '1px solid #e2e8f0',
                }}
              >
                <Typography sx={{ flex: 1, fontWeight: 'bold', color: '#4a5568' }}>{resource}</Typography>
                <Typography
                  sx={{
                    color: '#2c7a7b',
                    fontWeight: 'bold',
                    backgroundColor: '#e6fffa',
                    px: 2,
                    py: 0.5,
                    borderRadius: 1,
                  }}
                >
                  Total: {quantity}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Box>
  );
};

export default ResourceSummary;
