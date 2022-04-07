import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Core from '../core/Core';
import Map from '../map/Map';
import Placeholder from '../placeholder/Placeholder';
import ROUTES, { ROUTE_APP, ROUTE_MAP } from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to={ROUTE_APP} />} />
        <Route path={ROUTES.APP} element={<Core />}>
          <Route index element={<Navigate to={ROUTE_MAP} />} />
          <Route path={ROUTES.MAP} element={<Map />} />
          <Route path={ROUTES.TRACKS} element={<Placeholder name={'Tracks'} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
