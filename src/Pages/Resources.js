import React, { useEffect, useState } from 'react';
import Firebase from '../firebase';
import { collection, getDocs } from 'firebase/firestore';



function Resources() {
  
  const [resources, setResources] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

   

    useEffect(() => {

      const firebase = new Firebase();

        async function fetchResources() {
          const ref = collection(firebase.firestore, 'Resources');
          const querySnapshot = await getDocs(ref);
          const resourcesData = querySnapshot.docs.map(doc => doc.data());
          setResources(resourcesData);
        }
    
        fetchResources();
      }, []);

      const filteredResources = resources.filter(resource =>
        resource.healthIssue.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className='mt-32 mx-80 ' >
 <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Resources for Health Issues</h1>
      
      <input
        type="text"
        placeholder="Search health issues..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />

      {filteredResources.map((resource, index) => (
        <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
          <h2 style={{ color: '#333' }}>{resource.healthIssue}</h2>
          <ul style={{ listStyleType: 'disc', marginLeft: '20px', color: '#555', textAlign: 'left' }}>
            {resource.resources.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '5px' }}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    </div>
    
  )
}

export default Resources;