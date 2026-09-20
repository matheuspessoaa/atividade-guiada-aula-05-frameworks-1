// src/components/MapView.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Paper, Fade } from "@mui/material";
import "leaflet/dist/leaflet.css";

const MapView = ({ coordinates }) => {
  const mapKey = `${coordinates.lat}-${coordinates.lng}`;
  return (
    <Fade in={true} timeout={500}>
      <Paper
        elevation={6}
        sx={{ height: "400px", width: "100%", overflow: "hidden", mt: 2 }}
      >
        <MapContainer
          key={mapKey}
          center={[coordinates.lat, coordinates.lng]}
          zoom={17}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[coordinates.lat, coordinates.lng]}>
            <Popup>Localização do endereço.</Popup>
          </Marker>
        </MapContainer>
      </Paper>
    </Fade>
  );
};

export default MapView;