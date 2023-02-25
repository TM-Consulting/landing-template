import HeroHeader from "../../components/HeroHeader";
import About from "../../containers/About";
import OldProjects from "../../containers/OldProjects";

const index = (props: any) => {
  return (
    <>
      <HeroHeader {...props?.containers?.hero} />
      <About {...props?.containers?.about} />
      <OldProjects {...props?.containers?.oldProjects} />
    </>
  );
};

export default index;
