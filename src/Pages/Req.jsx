import React, { useEffect, useState } from 'react';
import Firebase from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { deleteDoc, doc } from 'firebase/firestore';

export default function Req ()  {

    const [requests, setRequests] = useState([]);
    const [resources, setResources] = useState([]);
    

    useEffect(() => {
        
        const firebase = new Firebase();

        const refRequests = collection(firebase.firestore, 'Request');
        const refResources = collection(firebase.firestore, 'Resources');

        const unsubscribeRequests = onSnapshot(refRequests, (snapshot) => {
            const newRequests = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setRequests(newRequests);
            // Trigger popup notification
            newRequests.forEach(request => {
                // const lastRequest = newRequests[newRequests.length - 1];
                alert(`New Request Received: \nMessage: ${request.message}\nSpecialization: ${request.specialization}\nLevel: ${request.level}`);
            });
        });

        const unsubscribeResources = onSnapshot(refResources, (snapshot) => {
          const newResources = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setResources(newResources);
        });

        return () => {
          unsubscribeRequests();
          unsubscribeResources();
        };
      }, []);

    const getMergedData = () => {
      return requests.map(request => {
        const matchingResource = resources.find(resource => resource.healthIssue === request.special);
        console.log(matchingResource);
        return {
          ...request,
          healthIssue: matchingResource?.healthIssue || 'N/A',
          resources: matchingResource?.resources || 'N/A'
        };
      });
    };

    const handleDelete = async (id) => {
      
      try {
        const firebase = new Firebase();
        // Reference to the specific document in the Firestore collection
        const requestDoc = doc(firebase.firestore, "Request", id);
        
        // Delete the document from Firestore
        await deleteDoc(requestDoc);
        
        alert("Request deleted successfully!");
      } catch (error) {
        console.error("Error deleting request:", error);
        alert("Failed to delete the request.");
      }
    };

    const mergedData = getMergedData();

  return (
  //   <div className='mt-32'>
  //   <h1><b>Admin Dashboard</b></h1>
  //   <h2>Incoming Requests</h2>
  //   {/* <ul>
  //     {requests.map((request) => (
  //       <li key={request.id}>
  //         <strong>Message:</strong> {request.message} <br />
  //         <strong>Specialization:</strong> {request.specialization} <br />
  //         <strong>Level:</strong> {request.level} <br />
  //       </li>
  //     ))}
  //   </ul> */}
  //   <div className='mx-80'>
  //   <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
  //   <thead style={{ backgroundColor: '#f5f5f5', textAlign: 'left' }}>
  //     <tr>
  //       <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>Message</th>
  //       <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>Specialization</th>
  //       <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>Level</th>
  //       <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>Actions</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {requests.map((request) => (
  //       <tr key={request.id} style={{ backgroundColor: '#fff', transition: 'background-color 0.3s ease' }}>
  //         <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>{request.message}</td>
  //         <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>{request.specialization}</td>
  //         <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>{request.level}</td>
  //         <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>
  //           <button 
  //             onClick={() => handleDelete(request.id)} 
  //             style={{ 
  //               backgroundColor: '#f44336', 
  //               color: '#fff', 
  //               border: 'none', 
  //               padding: '8px 12px', 
  //               borderRadius: '4px', 
  //               cursor: 'pointer', 
  //               transition: 'background-color 0.3s ease' 
  //             }}
  //             onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#d32f2f'}
  //             onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f44336'}
  //           >
  //             Delete
  //           </button>
  //         </td>
  //       </tr>
  //     ))}
  //   </tbody>
  // </table>
  // </div>
  // </div>

  <div className='mt-32'>
      <h1><b>Admin Dashboard</b></h1>
      <h2>Incoming Requests with Resources</h2>
      <div className='mx-80'>
        <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <thead style={{ backgroundColor: '#f5f5f5', textAlign: 'left' }}>
            <tr>
              <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>Patient Name</th>
              <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>Specialization</th>
              <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>Triage Level</th>
              {/* <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>Health Issue</th> */}
              {/* <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>Resources</th> */}
              <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mergedData.map((data) => (
              <tr key={data.id} style={{ backgroundColor: '#fff', transition: 'background-color 0.3s ease' }}>
                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>{data.message}</td>
                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>{data.specialization}</td>
                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>{data.level}</td>
                {/* <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>{data.healthIssue}</td> */}
                {/* <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>{data.resources}</td> */}
                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>
                  <button
                    onClick={() => handleDelete(data.id)}
                    style={{
                      backgroundColor: '#f44336',
                      color: '#fff',
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#d32f2f'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f44336'}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  )
}

