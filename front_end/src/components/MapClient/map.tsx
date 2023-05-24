import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import { useRouter } from "next/router";
import { Marker } from "react-leaflet";
import axios from "axios";
import L from "leaflet";

function GetIcon() {
  return L.icon({
    iconUrl: require("../../../public/images/pin.png"),
    iconSize: [35, 45],
  });
}

const Map = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<any>({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const result = await axios.get(
          `http://localhost:9000/products/${router.query.map}`
        );
        console.log("PP", result.data.product);
        setProduct(result.data.product);
        setIsLoading(false);
      } catch (error) {
        console.log("ERR", error);
        setIsLoading(false);
      }
    };
    getProduct();
  }, []);
  return (
    <div>
      <div style={{ height: "700px" }} className="w-full">
        <MapContainer
          style={{ height: "100%", width: "100%" }}
          center={{ lat: 47.919373, lng: 106.916217 }}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker
            icon={GetIcon()}
            position={{
              lat: product.product_location?.coordinates[1] || null,
              lng: product.product_location?.coordinates[0] || null,
            }}
          >
            <Popup>Eko Cab Төв office</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
