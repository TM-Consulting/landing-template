import HeroHeader from "../../components/HeroHeader";
import ContactUs from "../../containers/ContactUs";

const index = (props: any) => {
  return (
    <>
      <HeroHeader {...props?.containers?.hero} />
      <ContactUs {...props?.containers?.contact} />
    </>
  );
};

export default index;
