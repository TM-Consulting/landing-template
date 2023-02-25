import { SocialMediaLinksProps } from "../../utils/types";
import { Link } from "react-router-dom";
const index = ({
  title,
  twitterLink,
  facebookLink,
  linkedinLink,
  instagramLink,
}: SocialMediaLinksProps) => {
  return (
    <div className="col-lg-3 col-md-6">
      <h3 className="text-white mb-4">{title}</h3>
      <div className="d-flex">
        <Link
          to={twitterLink}
          className={`btn btn-lg btn-primary btn-lg-square rounded me-2`}
        >
          <i className="fab fa-twitter fw-normal"></i>
        </Link>
        <Link
          to={facebookLink}
          className={`btn btn-lg btn-primary btn-lg-square rounded me-2`}
        >
          <i className="fab fa-facebook fw-normal"></i>
        </Link>
        <Link
          to={linkedinLink}
          className={`btn btn-lg btn-primary btn-lg-square rounded me-2`}
        >
          <i className="fab fa-linkedin fw-normal"></i>
        </Link>
        <Link
          to={instagramLink}
          className={`btn btn-lg btn-primary btn-lg-square rounded me-2`}
        >
          <i className="fab fa-instagram fw-normal"></i>
        </Link>
      </div>
    </div>
  );
};
index.defaultProps = {
  isActive: false,
};

export default index;
