import React, { useEffect, useState } from 'react';
import Firebase from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export default function Req ()  {

    const [requests, setRequests] = useState([]);
    

    useEffect(() => {
        
        const firebase = new Firebase();

        const ref = collection(firebase.firestore, 'Msg');

        const unsubscribe = onSnapshot(ref, (snapshot) => {
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

        return () => unsubscribe();
    }, []);

  return (
    <div>
    <h1>Admin Dashboard</h1>
    <h2>Incoming Requests</h2>
    <ul>
      {requests.map((request) => (
        <li key={request.id}>
          <strong>Message:</strong> {request.message} <br />
          <strong>Specialization:</strong> {request.specialization} <br />
          <strong>Level:</strong> {request.level} <br />
        </li>
      ))}
    </ul>
  </div>
  )
}

