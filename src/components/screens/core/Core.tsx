import { Outlet } from 'react-router-dom';

import NavBar from '../../complex/navBar/NavBar';

import { Container } from './styles';

const Core = () => {
  return (
    <Container>
      <Outlet />
      <NavBar />
    </Container>
  );
};

export default Core;
