import TesmonialItem from "../../components/TesmonialItem";
import { testimonialProps } from "../../utils/types";

const index = ({ header, title, items }: testimonialProps) => {
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
        <div className="owl-carousel testimonial-carousel owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transition: "all 0s ease 0s",
                width: "4470px",
                transform: "translate3d(-894px, 0px, 0px)",
              }}
            >
              {items.map((item, index) => (
                <TesmonialItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="owl-nav disabled">
            <div className="owl-prev">prev</div>
            <div className="owl-next">next</div>
          </div>
          <div className="owl-dots">
            <div className="owl-dot active">
              <span></span>
            </div>
            <div className="owl-dot">
              <span></span>
            </div>
            <div className="owl-dot">
              <span></span>
            </div>
            <div className="owl-dot">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
