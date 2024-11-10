import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '100%',
    height: '80vh',
  };
  
  const center = {
    lat: 6.9271, // Coordinates of Colombo, Sri Lanka (modify as needed)
    lng: 79.8612,
  };
  
  const options = {
    zoomControl: true,
  };

  export default function Nearest  ()  {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAcnx9GpLdkxMneJvh-5EDEYBmjDD_Vp_I', // Add your Google Maps API Key here
      });
      const [selectedHospital, setSelectedHospital] = useState(null);
      const [hospitals, setHospitals] = useState([
        { id: 1, name: 'Lanka Hospital', location: { lat: 6.8916, lng: 79.8688 } },
        { id: 2, name: 'Asiri Hospital', location: { lat: 6.9033, lng: 79.8615 } },
        { id: 3, name: 'National Hospital', location: { lat: 6.9271, lng: 79.8643 } },
        // Add more hospitals with their respective locations
      ]);
    
      if (loadError) return 'Error loading maps';
      if (!isLoaded) return 'Loading Maps';
    
      return (
        <div>
          <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Find Nearest Hospitals</h1>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={center}
            options={options}
          >
            {hospitals.map((hospital) => (
              <Marker
                key={hospital.id}
                position={hospital.location}
                onClick={() => {
                  setSelectedHospital(hospital);
                }}
              />
            ))}
    
            {selectedHospital && (
              <InfoWindow
                position={selectedHospital.location}
                onCloseClick={() => {
                  setSelectedHospital(null);
                }}
              >
                <div>
                  <h2>{selectedHospital.name}</h2>
                  <button
                    onClick={() =>
                      alert(`Finding nearest hospitals to ${selectedHospital.name}`)
                    }
                  >
                    Find Nearest Hospitals
                  </button>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      );
}

