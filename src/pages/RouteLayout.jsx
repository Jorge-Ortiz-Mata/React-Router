import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const RouteLayout = () => {

  return(
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default RouteLayout;
