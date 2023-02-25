import { Link } from "react-router-dom";
import { ServiceItemProps } from "../../utils/types";
const index = ({ icon="flaticon-cctv", group, service, description, readmore }: ServiceItemProps) => {
  return (
    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
      <div className="service-item bg-light border-bottom border-5 border-primary rounded">
        <div className="position-relative p-5">
          <i className={`${icon} d-block display-1 fw-normal text-secondary mb-3`}></i>
          <h5 className="text-primary mb-0">{group}</h5>
          <h3 className="mb-3">{service}</h3>
          <p>
          {description}
          </p>
          <a href="/Service">
            {readmore}<i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
index.defaultProps = {
  isActive: false,
};

export default index;
