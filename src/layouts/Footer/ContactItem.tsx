import { ContactInfoProps } from "../../utils/types";
const index = ({
  title,
  companyAddress,
  phoneNumber,
  emailAddress,
}: ContactInfoProps) => {
  return (
    <div className="col-lg-3 col-md-6">
      <h3 className="text-white mb-4">{title}</h3>
      <p className="mb-2">
        <i className="bi bi-geo-alt text-primary me-2"></i>
        {companyAddress}
      </p>
      <p className="mb-2">
        <i className="bi bi-envelope-open text-primary me-2"></i>
        {emailAddress}
      </p>
      <p className="mb-0">
        <i className="bi bi-telephone text-primary me-2"></i>
        {phoneNumber}
      </p>
    </div>
  );
};
index.defaultProps = {
  isActive: false,
};

export default index;
