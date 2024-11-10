import React, { useEffect, useState } from 'react';
import Firebase from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Availability  ()  {

    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      const firebase = new Firebase();
      const refDepartments = collection(firebase.firestore, 'Departments'); // Assuming 'Departments' collection holds department data
  
      const unsubscribe = onSnapshot(refDepartments, (snapshot) => {
        const departmentData = snapshot.docs.map(doc => ({
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
    <div >
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            minHeight: '100vh',
            backgroundColor: '#E9ECF3', // Light background to match your screenshot
            padding: '20px',
            paddingTop: '50px'
        }}
        >
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Resource Availability</h1>
                <h2 style={{ fontSize: '16px', color: '#666' }}>Department-Wise Resource Status</h2>
            </div>
      {/* <div className="mx-80"> */}

      <div style={{
                width: '80%',
                maxWidth: '600px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                margin: '0 auto'
            }}>
        
        <table style={{
                    width: '100%',
                    borderCollapse: 'collapse'
                }}>
                    <thead style={{ backgroundColor: '#f5f5f5' }}>
                        <tr>
                            <th style={{
                                padding: '16px',
                                textAlign: 'left',
                                borderBottom: '2px solid #ddd',
                                fontWeight: '600',
                                fontSize: '16px'
                            }}>Department</th>
                            <th style={{
                                padding: '16px',
                                textAlign: 'left',
                                borderBottom: '2px solid #ddd',
                                fontWeight: '600',
                                fontSize: '16px'
                            }}>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map((department) => (
                            <tr key={department.id} style={{ transition: 'background-color 0.3s ease' }}>
                                <td style={{
                                    padding: '16px',
                                    textAlign: 'left',
                                    borderBottom: '1px solid #ddd',
                                    fontSize: '14px'
                                }}>
                                    {department.name}
                                </td>
                                <td style={{
                                    padding: '16px',
                                    textAlign: 'left',
                                    borderBottom: '1px solid #ddd',
                                    color: department.isAvailable ? '#4CAF50' : '#f44336',
                                    fontWeight: 'bold',
                                    fontSize: '14px'
                                }}>
                                    {department.isAvailable ? 'Available' : 'Not Available'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
        </table>
        </div>
      {/* </div> */}

      <button
                    style={{
                        padding: '12px 24px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#fff',
                        backgroundColor: '#4CAF50',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        marginTop: '60px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        transition: 'background-color 0.3s ease'
                    }}
                    onClick={() => {
                        // Add your button click handler here
                        alert("Navigating to nearest hospitals...");
                        navigate('/Nearest');
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#45A049'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
                >
                    Check Nearest Hospitals
                </button>


    </div>
    </div>
  );
}

