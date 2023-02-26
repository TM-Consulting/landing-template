import HeroHeader from "../../components/HeroHeader";
import ContactInfoItem from "../../components/ContactInfoItem";

const index = (props: any) => {
  return (
    <>
      <HeroHeader {...props?.containers?.hero} />
      <ContactInfoItem {...props?.containers?.contact}/>
    </>
  );
};

export default index;
