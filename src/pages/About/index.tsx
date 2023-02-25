import HeroHeader from "../../components/HeroHeader";

const index = (props: any) => {
  return (
    <>
      <HeroHeader {...props?.containers?.hero} />
    </>
  );
};

export default index;
