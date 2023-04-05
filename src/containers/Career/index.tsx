import CareerItem from "../../components/CareerItem";
import { CareerProps } from "../../utils/types";

const index = ({ header, title, items }: CareerProps) => {
  if (!items) return <></>;
  return (
    <div
      className="container-fluid career py-5 wow fadeInUp"
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
        <div className="owl-carousel testimonial-carousel owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage career-stage"
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {items.map((item, index) => (
                <CareerItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
