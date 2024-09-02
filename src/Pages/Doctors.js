import React from 'react'
import { Box, Grid, Paper, Typography, Avatar } from '@mui/material';
import doc from '../Components/Assests/doc.png';


function Doctor() {

  const doctors = [
    { name: 'Dr. Prasanna', description: 'Specialist in Internal Medicine.' },
    { name: 'Dr. Bandara', description: 'Expert in Cardiology.' },
    { name: 'Dr. Pubudu', description: 'Specialist in Internal Medicine.' },
    { name: 'Dr. A.J Hilmi', description: 'Expert in Oncologist.' },
    { name: 'Dr. Deepal Attanayake', description: 'Expert in Neuro Surgeon.' },
    { name: 'Dr. Bandara', description: 'Expert in Cardiology.' },
  ];
  
  return (
    
    <div className='mx-52 mt-24'>
      <Box sx={{ mt: 8, px: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Doctor Details
      </Typography>

      <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
        {doctors.map((doctor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <Avatar
                alt={doctor.name}
                src={doc}
                sx={{ width: 80, height: 80, mb: 2 }}
              />
              <Typography variant="h6" component="p" sx={{ fontWeight: '600' }}>
                {doctor.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {doctor.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  )
}

export default Doctor;