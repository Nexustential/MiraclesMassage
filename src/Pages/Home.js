import CarouselFade from "../Components/CarouselFade";
import Services from "../Components/Services";
import Mission from "../Components/MissionStatement";
//import { Fade } from "react-reveal";

const Home = () => {
  return (
    <>
        <CarouselFade />
        <Mission />
        <Services />
    </>
  );
};

export default Home;
