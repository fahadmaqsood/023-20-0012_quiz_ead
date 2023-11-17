import "./HeroComponent.css";

import { Outlet, Link } from "react-router-dom";

const HeroComponent = () => {
  return (

    <div className="row hero p-5 d-flex text-center justify-content-center align-items-center">
        <div className="col-6 text-white text-center hero-text">
            Indulge in a symphony of flavors at our artisanal bakery. 
            Welcome to a world where the aroma of freshly baked 
            wonders captivates your senses. Our master bakers 
            craft each creation with passion, using only the finest 
            ingredients to ensure every bite is pure delight. 

            From flaky croissants to decadent cakes, experience 
            the epitome of taste and craftsmanship. Whether it's 
            a special occasion or a craving for the extraordinary, 
            our bakery offers a haven for your palate. Elevate 
            your moments with the magic of our oven-fresh delights. 
            Your journey to exceptional taste begins here.
        </div>

        <div className="col-3 text-center">
            <img src="/image-2@2x.png" />
        </div>
    </div>
  );
};

export default HeroComponent;
