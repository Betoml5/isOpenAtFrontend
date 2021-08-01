import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { Popup } from "leaflet";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getShops } from "../services/Shop";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
  iconUrl: require("leaflet/dist/images/marker-icon.png").default,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
});

const Location = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      const fetchedShops = await getShops();
      console.log(fetchedShops);
      setShops(fetchedShops);
    };
    fetchShops();
  }, []);

  return (
    <MapContainer
      center={[27.8617, -101.1255]}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
      zoomAnimation={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {shops?.map((shop) => (
        <Marker position={shop?.location}></Marker>
      ))}
    </MapContainer>
  );
};

export default Location;
