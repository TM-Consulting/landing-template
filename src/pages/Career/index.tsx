import HeroHeader from "../../components/HeroHeader";
import Candidature from "../../containers/Candidature";
import Career from "../../containers/Career";

const index = (props: any) => {
  return (
    <>
      <HeroHeader {...props?.containers?.hero} />
      <Career {...props?.containers?.career} />
      <Candidature {...props?.containers?.candidature} />
    </>
  );
};

export default index;
