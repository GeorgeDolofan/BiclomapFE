import { TileLayer, Marker, Popup } from 'react-leaflet';

import Screen from '../../basic/screen/Screen';
import { StyledMapContainer } from './styles';

const Map = () => {
  return (
    <Screen>
      <StyledMapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </StyledMapContainer>
    </Screen>
  );
};

export default Map;
