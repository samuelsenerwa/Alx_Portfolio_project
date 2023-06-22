// import React from 'react';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';

// const Map = () => {
//   return (
//     <MapContainer
//       center={[latitude, longitude]} // Set the initial center of the map
//       zoom={13} // Set the initial zoom level of the map
//       style={{ height: '400px', width: '100%' }} // Set the size of the map container
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL for the map tiles
//         attribution="Map data © OpenStreetMap contributors" // Attribution text for the map tiles
//       />

//       {/* Add markers for hospitals */}
//       {filteredHospitals.map((hospital) => (
//         <Marker key={hospital.id} position={[hospital.latitude, hospital.longitude]}>
//           {/* Additional marker details */}
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default Map;





import React from 'react';

const Map = () => {
  return (
    <section id="google-map">
         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d33350.54493783667!2d36.8375955520698!3d-1.2868917383539813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1687431130959!5m2!1sen!2sus" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </section>  
  );
};

export default Map;