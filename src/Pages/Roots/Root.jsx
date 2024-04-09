import FooterSec from "../../Components/Footer/FooterSec";
import Nav from "../../Components/Nav";
import {Outlet} from 'react-router-dom'


const Root = () => {
  return (
    <div>
     <Nav />
     <Outlet />
    <FooterSec />
    </div>
  );
};

export default Root;
