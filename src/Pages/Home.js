import CarouselFade from "../Components/CarouselFade";
import Services from "../Components/Services";
import Mission from "../Components/MissionStatement";
import { Fade } from "react-reveal";

const Home = () => {
  return (
    <>
      <Fade distance="70%" duration={1000}>
        <CarouselFade />
        <Mission />
        <Services />
      </Fade>
    </>
  );
};

export default Home;
