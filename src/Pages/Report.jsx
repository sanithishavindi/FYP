import React, { useEffect, useState } from 'react';
import Firebase from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export default function Report  ()  {

    const [reports, setReports] = useState([]);

    useEffect(() => {
        const firebase = new Firebase();
        const refRequests = collection(firebase.firestore, 'Request');
        const refResources = collection(firebase.firestore, 'Resources');
    
        let allRequests = [];
        let allResources = [];
    
        // Fetch Requests
        const unsubscribeRequests = onSnapshot(refRequests, (snapshot) => {
          allRequests = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
    
          // Update reports after receiving both requests and resources
          updateReports(allRequests, allResources);
        });
    
        // Fetch Resources
        const unsubscribeResources = onSnapshot(refResources, (snapshot) => {
          allResources = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
    
          // Update reports after receiving both requests and resources
          updateReports(allRequests, allResources);
        });
    
        // Function to update the reports state based on requests and resources
        const updateReports = (requests, resources) => {
          const mergedData = requests.map(request => {
            const matchingResource = resources.find(resource => resource.special === request.special);
            return {
              ...request,
              healthIssue: matchingResource?.healthIssue || 'N/A',
              resources: matchingResource?.resources || 'N/A'
            };
          });
          setReports(mergedData);
        };

        return () => {
            unsubscribeRequests();
            unsubscribeResources();
          };
        }, []);

  return (
    <div className='mt-32'>
     <div >
      <h1><b>Admin Reports</b></h1>
      <h2>Generated Reports</h2>
      <div className='mx-80'>
        <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <thead style={{ backgroundColor: '#f5f5f5', textAlign: 'left' }}>
            <tr>
              <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>Patient Name</th>
              <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>Specialization</th>
              <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>Triage Level</th>
              <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>Health Issue</th>
              <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>Resources</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} style={{ backgroundColor: '#fff', transition: 'background-color 0.3s ease' }}>
                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>{report.message}</td>
                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>{report.specialization}</td>
                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>{report.level}</td>
                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>{report.healthIssue}</td>
                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>{report.resources}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
    </div>
    
  )
}
