import HeroHeader from "../../components/HeroHeader";
import About from "../../containers/About";

const index = (props: any) => {
  console.log("testttt", props);
  return (
    <>
      <HeroHeader {...props?.containers?.hero} />
      <About {...props?.containers?.about} />
    </>
  );
};

export default index;
