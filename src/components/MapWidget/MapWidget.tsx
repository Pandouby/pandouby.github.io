import { FC, ReactElement, useRef } from "react";
import "./styles.scss";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const MapWidget: FC = () => {
	const mapRef = useRef();
	const mapContainerRef = useRef();

	return <div className="map-widget" ref={mapContainerRef}></div>;
};
