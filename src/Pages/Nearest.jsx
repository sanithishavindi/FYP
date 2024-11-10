import React, { useState } from 'react';
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
      const [searchTerm, setSearchTerm] = useState('');
      const [nearestHospitals, setNearestHospitals] = useState([]);

      const [hospitals] = useState([
        { id: 1, name: 'Lanka Hospital', location: { lat: 6.8916, lng: 79.8688 } },
        { id: 2, name: 'Asiri Hospital', location: { lat: 6.9033, lng: 79.8615 } },
        { id: 3, name: 'National Hospital', location: { lat: 6.9271, lng: 79.8643 } },
        // Add more hospitals with their respective locations
      ]);
    
      if (loadError) return 'Error loading maps';
      if (!isLoaded) return 'Loading Maps';

      // Function to calculate distance between two points using the Haversine formula
  const calculateDistance = (loc1, loc2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRad(loc2.lat - loc1.lat);
    const dLng = toRad(loc2.lng - loc1.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(loc1.lat)) * Math.cos(toRad(loc2.lat)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  };

  const findNearestHospitals = (hospital) => {
    // Calculate distance from selected hospital to other hospitals
    const distances = hospitals
      .filter(h => h.id !== hospital.id) // Exclude the selected hospital
      .map(h => ({
        ...h,
        distance: calculateDistance(hospital.location, h.location),
      }));
    // Sort by distance and pick the nearest ones
    distances.sort((a, b) => a.distance - b.distance);
    setNearestHospitals(distances.slice(0, 3)); // Show top 3 nearest hospitals
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

    
      return (
        <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Find Nearest Hospitals</h1>
      <input
        type="text"
        placeholder="Search Hospital"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          display: 'block',
          margin: '10px auto',
          padding: '10px',
          width: '80%',
          fontSize: '16px',
        }}
      />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
      >
        {filteredHospitals.map((hospital) => (
          <Marker
            key={hospital.id}
            position={hospital.location}
            onClick={() => {
              setSelectedHospital(hospital);
              setNearestHospitals([]);
            }}
          />
        ))}

        {selectedHospital && (
          <InfoWindow
            position={selectedHospital.location}
            onCloseClick={() => {
              setSelectedHospital(null);
              setNearestHospitals([]);
            }}
          >
            <div>
              <h2>{selectedHospital.name}</h2>
              <button
                onClick={() => findNearestHospitals(selectedHospital)}
              >
                Find Nearest Hospitals
              </button>
            </div>
          </InfoWindow>
        )}

        {/* Display nearest hospitals if they are found */}
        {nearestHospitals.map((hospital) => (
          <InfoWindow
            key={hospital.id}
            position={hospital.location}
          >
            <div>
              <h3>{hospital.name}</h3>
              <p>Distance: {hospital.distance.toFixed(2)} km</p>
            </div>
          </InfoWindow>
        ))}
      </GoogleMap>
    </div>
      );
}

