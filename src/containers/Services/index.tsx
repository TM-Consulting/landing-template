import ServiceItem from "../../components/ServiceItem";
import { ServiceProps } from "../../utils/types";

const index = ({ title, description, items }: ServiceProps) => {
  if (!items) return <></>;

  return (
    <div className="container-fluid services py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h5
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            {title}
          </h5>
          <h1 className="display-5 mb-0">{description}</h1>
        </div>
        <div className="row g-5" style={{ justifyContent: "center" }}>
          {items.map((item, index) => (
            <ServiceItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
