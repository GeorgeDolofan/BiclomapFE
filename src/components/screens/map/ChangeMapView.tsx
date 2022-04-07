import { useMap } from "react-leaflet";

interface IProps {
  center: number[];
  zoom: number;
}

const ChangeMapView = (props: IProps) => {
  const map = useMap();

  const [latitude, longitude] = props.center;

  map.setView([latitude, longitude], props.zoom)

  return null;
}

export default ChangeMapView