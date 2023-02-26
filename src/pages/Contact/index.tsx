import Form from "../../components/Form";
import HeroHeader from "../../components/HeroHeader";
import ContactInfoItem from "../../components/ContactInfoItem";

const index = (props: any) => {
  return (
    <>
      <HeroHeader {...props?.containers?.hero} />
      <ContactInfoItem {...props?.containers?.contact}/>
      <Form {...props?.containers?.contact.form} />
    </>
  );
};

export default index;
