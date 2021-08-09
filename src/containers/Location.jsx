import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState, useEffect } from "react";
import { getShops } from "../services/Shop";
import shopIcon from "../static/shops.svg";
import { Helmet } from "react-helmet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
  iconUrl: require("leaflet/dist/images/marker-icon.png").default,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
});

const myIcon = L.icon({
  iconUrl: shopIcon,
  iconRetinaUrl: shopIcon,
  popupAnchor: [0, -8],
  iconSize: [48, 48],
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
    <div className="h-screen">
      <Helmet>
        <html lang="es" />
        <title>IsOpenAt - Mapa</title>
        <meta name="description" content="Mapa de comercios - IsOpenAt" />
      </Helmet>
      <MapContainer
        center={[27.8617, -101.1255]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", zIndex: 10 }}
        zoomAnimation={true}
      >
        <TileLayer
          attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
          url="https://api.mapbox.com/styles/v1/betoml5/ckrtydjfigv4t19og4jequqbd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYmV0b21sNSIsImEiOiJja3J0eWp0NTkwdTltMndxbWdrczJpbnNoIn0.iq1W0M6Pq4_9WrlZq2rhTg"
        />

        {shops?.map((shop) => (
          <Marker position={shop?.location} icon={myIcon}>
            <Popup>{shop?.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Location;
