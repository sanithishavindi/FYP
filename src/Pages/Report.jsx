import React, { useEffect, useState } from 'react';
import Firebase from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import "./report.css";

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
          console.log(requests);
          
          const mergedData = requests.map(request => {
            const matchingResource = resources.find(resource => resource.healthIssue === request.specialization);
            console.log(matchingResource);
            
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
    <div className='report-container mt-32 mx-80'>
      <div className='report-header'>
        <h1><b>Admin Reports</b></h1>
        <h2>Generated Reports</h2>
      </div>
      <div className='report-list'>
        {reports.map((report) => (
          <div key={report.id} className='report-card'>
            <div className='report-details'>
              <h3>Patient Name</h3>
              <p className='report-field' >{report.message}</p>
            </div>
            <div className='report-details'>
              <h3>Specialization</h3>
              <p >{report.specialization}</p>
            </div>
            <div className='report-details'>
              <h3>Triage Level</h3>
              <p className={`report-field ${report.level === "High" ? "high-level" : "normal-level"}`}>{report.level}</p>
            </div>
            <div className='report-details'>
              <h3>Health Issue</h3>
              <p>{report.healthIssue}</p>
            </div>
            <div className="report-details">
  <h3>Resources</h3>
  {report.resources && Array.isArray(report.resources) ? (
    <ul className="resource-list">
      {report.resources.map((resource, index) => (
        <li key={index} className="resource-item">{resource}</li>
      ))}
    </ul>
  ) : (
    <p className="no-resources">No resources available</p>
  )}
</div>
          </div>
        ))}
      </div>
    </div>
    
  )
}
