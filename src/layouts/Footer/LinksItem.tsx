import { Link } from "react-router-dom";
import { LinksItemProps } from "../../utils/types";
const index = ({ title, linksTitles }: LinksItemProps) => {
  return (
    <div className="col-lg-3 col-md-6">
      <h3 className="text-white mb-4">{title}</h3>
      <div className="d-flex flex-column justify-content-start">
        {linksTitles.map((listitem) => (
          <Link to={listitem.linkRef} className={`text-light mb-2`}>
            <i className="bi bi-arrow-right text-primary me-2"></i>
            {listitem.linkTitle}
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
