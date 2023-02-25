import { aboutProps } from "../../utils/types";

const index = ({
  title,
  titleOffer,
  description,
  yearsOfExp,
  certificates,
}: aboutProps) => {
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
        <div className="row gx-5">
          <div
            className="col-lg-5 mb-5 mb-lg-0"
            style={{ minHeight: " 500px" }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.3s"
                src={require("../../config/images/about.jpg")}
                style={{
                  objectFit: "cover",
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "zoomIn",
                }}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="mb-4">
              <h5
                className="text-primary text-uppercase"
                style={{
                  letterSpacing: "5px",
                }}
              >
                {title}
              </h5>
              <h1 className="display-5 mb-0">{titleOffer}</h1>
            </div>

            <p className="mb-4">{description}</p>
            <div className="row g-3">
              {yearsOfExp && (
                <div
                  className="col-sm-6 wow zoomIn"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.6s",
                    animationName: "zoomIn",
                  }}
                >
                  <div
                    className="bg-primary d-flex flex-column justify-content-center text-center border-bottom border-5 border-secondary rounded p-3"
                    style={{
                      height: "200px",
                    }}
                  >
                    <i className="fa fa-star fa-4x text-white mb-4"></i>
                    <h4 className="text-white mb-0">15 Years Experience</h4>
                  </div>
                </div>
              )}
              {certificates && (
                <div
                  className="col-sm-6 wow zoomIn"
                  data-wow-delay="0.9s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.9s",
                    animationName: "zoomIn",
                  }}
                >
                  <div
                    className="bg-secondary d-flex flex-column justify-content-center text-center border-bottom border-5 border-primary rounded p-3"
                    style={{
                      height: "200px",
                    }}
                  >
                    <i className="fa fa-award fa-4x text-white mb-4"></i>
                    <h4 className="text-white mb-0">Award Winning</h4>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
