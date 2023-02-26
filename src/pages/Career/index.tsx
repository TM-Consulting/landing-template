import HeroHeader from "../../components/HeroHeader";
import Career from "../../containers/Career";

const index = (props: any) => {
  return (
    <>
      <HeroHeader {...props?.containers?.hero} />
      <Career {...props?.containers?.career} />
    </>
  );
};

export default index;
