import { SocialMediaLinksProps } from "../../utils/types";
import { Link } from "react-router-dom";
const index = ({ title, SocialMediaLinks }: SocialMediaLinksProps) => {
  return (
    <div className="col-lg-3 col-md-6">
      <h3 className="text-white mb-4">{title}</h3>
      <div className="d-flex">
        {SocialMediaLinks.map((item, index) => (
          <Link
            to={item.link}
            className={`btn btn-lg btn-primary btn-lg-square rounded me-2`}
          >
            <i className={`fab fa-${item.provider} fw-normal`}></i>
          </Link>
        ))}
      </div>
    </div>
  );
};
index.defaultProps = {
  isActive: false,
};

export default index;
