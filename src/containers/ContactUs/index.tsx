import ContactInfoItem from "../../components/ContactInfoItem";
import Form from "../../components/Form";
import { ContactProps } from "../../utils/types";

const index = (props: ContactProps) => {
  const { header, title, form } = props;
  if (!props || !Object.keys(props)?.length) return <></>;
  return (
    <div
      className="container-fluid py-5 wow fadeInUp"
      data-wow-delay="0.1s"
      style={{
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeInUp",
      }}
    >
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h5
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            {header}
          </h5>
          <h1 className="display-5 mb-0">{title}</h1>
        </div>
        <div className="row g-5">
          <div
            className="col-lg-7 wow slideInUp"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <Form {...form} />
          </div>
          <div
            className="col-lg-5 wow slideInUp"
            data-wow-delay="0.6s"
            style={{
              visibility: "visible",
              animationDelay: "0.6s",
              animationName: "fadeInUp",
            }}
          >
            <ContactInfoItem {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
