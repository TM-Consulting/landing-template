import Carousel from "../../containers/Carousel";
import About from "../../containers/About";
import Services from "../../containers/Services";
const index = (props: any) => {
  return (
    <>
      <Carousel items={props.containers?.carousel?.items} />
      <About {...props.containers.about} />
      <Services {...props.containers?.services}/>
    </>
  );
};

export default index;
