import { useState, useEffect } from "react";

export function useGeoCode() {
    const [userLocation, setUserLocation] = useState(null);

    const getGeocode = async (address) => {
        const apiKey = '9b278a0a4aa142a5be0464d52bf05dbd';  // Reemplaza con tu API key
        const encodedAddress = encodeURIComponent(address);
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodedAddress}&key=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.status.code === 200) {
                const location = data.results[0].geometry;
                console.log(location);
                console.log(`Latitud: ${location.lat}, Longitud: ${location.lng}`);
                return { latitud: location.lat, longitud: location.lng };
            } else {
                console.error('Error en la geocodificación:', data.status.message);
                return { latitud: null, longitud: null };
            }
        } catch (error) {
            console.error('Error al hacer la solicitud:', error);
            return { latitud: null, longitud: null };
        }
    };

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setUserLocation({
                    latitud: position.coords.latitude,
                    longitud: position.coords.longitude
                });
            }, error => {
                console.error("Error obteniendo la ubicación del usuario:", error);
            });
        } else {
            console.error("Geolocalización no soportada por este navegador.");
        }
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radio de la Tierra en km
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distancia en km
    };

    const sortedData = (data) => userLocation ?
        data.slice().sort((a, b) => {
            const distanceA = calculateDistance(userLocation.latitud, userLocation.longitud, a.latitud, a.longitud);
            const distanceB = calculateDistance(userLocation.latitud, userLocation.longitud, b.latitud, b.longitud);
            return distanceA - distanceB;
        }) : data;

    return { getGeocode, calculateDistance, sortedData, getUserLocation, userLocation };
}
