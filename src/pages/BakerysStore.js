import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";
import OfferingsComponent from "../components/OfferingsComponent";
import AboutUsComponent from "../components/AboutUsComponent";
import ContactUsComponent from "../components/ContactUsComponent";
import FooterComponent from "../components/FooterComponent";
import "./BakerysStore.css";

const BakerysStore = () => {
  return (
    <div className="bakerys-store">
      <HeaderComponent />

      <HeroComponent />

      <OfferingsComponent />

      <AboutUsComponent />

      <ContactUsComponent />


      <FooterComponent />

    </div>
  );
};

export default BakerysStore;
