import HeroHeader from "../../components/HeroHeader";
import Services from "../../containers/Services";
import Testmonial from "../../containers/Testimonial";
const index = (props: any) => {
  return (
    <>
      <HeroHeader {...props?.containers?.hero} />
      <Services {...props.containers?.services} />
      <Testmonial {...props.containers?.testmonial} />
    </>
  );
};

export default index;
