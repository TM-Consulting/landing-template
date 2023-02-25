import Carousel from "../../containers/Carousel";
import About from "../../containers/About";
const index = (props: any) => {
  return (
    <>
      <Carousel items={props.containers?.carousel?.items} />
      <About />
    </>
  );
};

export default index;
