import Carousel from "../../containers/Carousel";
import About from "../../containers/About";
import Services from "../../containers/Services";
import Testmonial from "../../containers/Testimonial";
const index = (props: any) => {
  return (
    <>  
      <Carousel items={props.containers?.carousel?.items} />
      <About {...props.containers.about} />
      <Services {...props.containers?.services} />
      <Testmonial {...props.containers?.testmonial} />
    </>
  );
};

export default index;
