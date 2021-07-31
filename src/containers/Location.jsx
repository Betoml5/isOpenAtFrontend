import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMapEvent,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useCallback, useMemo } from "react";
import { useState } from "react";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
  iconUrl: require("leaflet/dist/images/marker-icon.png").default,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
});

function MyComponent() {
  const [cords, setCords] = useState({ lat: 27.9324, lng: -101.1255 });
  const map = useMap();
  map.on(
    "click",
    useCallback(({ latlng }) => {
      console.log("setting cords...");
      setCords({
        lat: latlng.lat,
        lng: latlng.lng,
      });
    }, [])
  );

  return <Marker position={cords} />;
}

const Location = () => {
  const position = [27.9324, -101.2157];

  const [marker, setMarker] = useState({ lat: 0, lng: 0 });

  const eventHandlers = useMemo((e) => {}, []);

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

      <MyComponent />
    </MapContainer>
  );
};

export default Location;
