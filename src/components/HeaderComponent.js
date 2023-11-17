import "./HeaderComponent.css";

import { Outlet, Link } from "react-router-dom";

const HeaderComponent = () => {
  return (

    <div className="row header">
      <div className="col-1"></div>

      <div className="col-2">
        <img src="/image-1@2x.png" />
      </div>

      <div className="col-4"></div>

      <div className="col-1 d-flex align-items-center"><Link to="/">Home</Link></div>
      <div className="col-1 d-flex align-items-center"><Link to="/menu">Menu</Link></div>
      <div className="col-1 d-flex align-items-center"><Link to="/about">About</Link></div>
      <div className="col-1 d-flex align-items-center"><Link to="/contact">Contact</Link></div>
      

    </div>
  );
};

export default HeaderComponent;
