import React from 'react';
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
    <div className='mx-72 mt-24'>
      <div
        style={{
          background: 'linear-gradient(120deg, #f0f4f8, #ffffff)',
          padding: '40px 20px',
          borderRadius: '12px',
        }}
      >
        <Box sx={{ mt: 8, px: 8 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#333',
              borderBottom: '3px solid #007bff',
              display: 'inline-block',
              marginBottom: '32px',
            }}
          >
            Meet Our Doctors
          </Typography>

          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {doctors.map((doctor, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={6}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '300px', // Fixed height for consistent box sizes
                    padding: 3,
                    borderRadius: 4,
                    textAlign: 'center',
                    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  <Avatar
                    alt={doctor.name}
                    src={doc}
                    sx={{
                      width: 100,
                      height: 100,
                      marginBottom: 2,
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                    }}
                  />
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{ fontWeight: '600', color: '#007bff', marginBottom: '8px' }}
                  >
                    {doctor.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontSize: '0.95rem' }}
                  >
                    {doctor.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Doctor;
