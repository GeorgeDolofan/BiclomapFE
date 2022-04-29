import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Core from '../core/Core';
import NewUserForm from '../Home/Home';
import SignUp from '../Home/SignUp';
import Map from '../map/Map';
import Placeholder from '../placeholder/Placeholder';
import ROUTES, { ROUTE_APP, ROUTE_MAP, ROUTE_HOME, ROUTE_SIGNUP} from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to={ROUTE_APP} />} />
        <Route path={ROUTES.APP} element={<Core />}>
          <Route index element={<Navigate to={ROUTE_MAP} />} />
          <Route path={ROUTES.HOME} element={<NewUserForm />}/>
          <Route path={ROUTES.SIGNUP} element={<SignUp />}/>
          <Route path={ROUTES.MAP} element={<Map />} />
          <Route path={ROUTES.TRACKS} element={<Placeholder name={'Tracks'} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
