import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <div>
      <div style={{ height: "700px" }} className="w-full">
        <MapContainer
          style={{ height: "100%", width: "100%" }}
          center={[47.923835370062754, 106.9344680555137]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <Marker
            position={[
              product.product_location[0],
              product.product_location[1],
            ]}
          >
            <Popup>Eko Cab Төв office</Popup>
          </Marker> */}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
