import React, { useRef, useEffect, useState } from 'react';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
import useStyles from './styles';

mapboxgl.accessToken = 'pk.eyJ1IjoiZmx1ZiIsImEiOiJja25hbGg1bGQxMnA2Mm5tcTg4ZHowN2tiIn0.ApbA5BLHdvHT2hTbZD5ITw';

const Map = ({ latitude, longitude }: { latitude: number, longitude: number }) => {
	const classes = useStyles();
	const mapContainer = useRef<HTMLDivElement | null>(null);
	const [lat, setLat] = useState(latitude);
	const [lng, setLng] = useState(longitude);
	const [zoom, setZoom] = useState(17);

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainer.current ?? "",
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: zoom
		});

		map.on('move', () => {
			setLng(+map.getCenter().lng.toFixed(4));
			setLat(+map.getCenter().lat.toFixed(4));
			setZoom(+map.getZoom().toFixed(2));
		});

		return () => map.remove();
		// eslint-disable-next-line
	}, []);

	return (
		<div className={classes.root}>
			<div className={classes.mapContainer} ref={mapContainer} />
		</div>
	);
};

export default Map;
