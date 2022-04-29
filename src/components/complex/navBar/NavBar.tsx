import { Button, Container } from './styles';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return <Container>
    <Link to="/app/home">
      <Button>Home</Button>
    </Link>
    <Link to="/app/map">
      <Button>Map</Button>
    </Link>
    <Link to="/app/TRACKS">
      <Button>Tracks</Button>
    </Link>
  </Container>;
};

export default NavBar;
