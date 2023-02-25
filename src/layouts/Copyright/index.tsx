import { CopyrightProps } from "../../utils/types";
import { Link } from "react-router-dom";

const Copyright = ({
  companyName,
  producerName,
  producerLink,
  mention,
  designedby,
}: CopyrightProps) => {
  return (
    <div className="container-fluid bg-primary text-light py-4">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-md-0">
              &copy;{" "}
              <Link to="/Home" className={`text-white border-bottom`}>
                {companyName}
              </Link>
              {mention}
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              {designedby}{" "}
              <Link to={producerLink} className={`text-white border-bottom`}>
              {producerName}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
