import { useCallback, useEffect, useState } from 'react';
import { TileLayer, Marker, Popup } from 'react-leaflet';

import Screen from '../../basic/screen/Screen';
import ChangeMapView from './ChangeMapView';
import { StyledMapContainer } from './styles';

const Map = () => {
  const [status, setStatus] = useState<string | null>('Not initialized');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [zoom, setZoom] = useState(15);

  const updateLocation = useCallback(
    () =>
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        () => {
          setStatus('Unable to retrieve your location');
        }
      ),
    []
  );

  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      updateLocation();
    }
  }, [updateLocation]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  useEffect(() => {
    console.log(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <Screen>
      <StyledMapContainer center={[45, 21]} zoom={zoom}>
        <ChangeMapView center={[latitude, longitude]} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </StyledMapContainer>
    </Screen>
  );
};

export default Map;
