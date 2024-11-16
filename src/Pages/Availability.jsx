import React, { useEffect, useState } from 'react';
import Firebase from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Stack } from '@mui/material';

export default function Availability() {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const firebase = new Firebase();
    const refDepartments = collection(firebase.firestore, 'Departments');

    const unsubscribe = onSnapshot(refDepartments, (snapshot) => {
      const departmentData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDepartments(departmentData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#F9FAFC',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 20px',
      }}
    >
      {/* Header Section */}
      <Paper
        elevation={3}
        sx={{
          padding: '20px 30px',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '30px',
          width: { xs: '100%', sm: '80%', md: '60%' },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#3A5E77' }}>
          Resource Availability
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#637381', marginTop: '8px' }}>
          Department-Wise Resource Status
        </Typography>
      </Paper>

      {/* Table Section */}
      <TableContainer
        component={Paper}
        elevation={3}
        sx={{
          width: { xs: '100%', sm: '80%', md: '60%' },
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#E0F7FA' }}>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', color: '#006064' }}>
                Department
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', color: '#006064' }}>
                Availability
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departments.map((department) => (
              <TableRow key={department.id} hover>
                <TableCell sx={{ fontSize: '14px', color: '#455A64' }}>
                  {department.name}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: department.isAvailable ? '#43A047' : '#E53935',
                  }}
                >
                  {department.isAvailable ? 'Available' : 'Not Available'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Button Section */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{
          marginTop: '40px',
          width: { xs: '100%', sm: '80%', md: '60%' },
        }}
      >
        <Button
          variant="contained"
          onClick={() => navigate('/Nearest')}
          sx={{
            backgroundColor: '#0288D1',
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: '16px',
            borderRadius: '8px',
            padding: '10px 20px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#0277BD',
            },
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
          }}
        >
          Check Nearest Hospitals
        </Button>
      </Stack>
    </Box>
  );
}
