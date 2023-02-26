import { ContactProps } from "../../utils/types";
import Iframe from "react-iframe";
const index = ({ contactInfos, mapsurl }: ContactProps) => {
  return (
    <div className="bg-light rounded p-5">
      {contactInfos.map((item, index) => (
        <div className="d-flex align-items-center mb-2">
          <i className={`bi bi-${item.type} fs-1 text-primary me-3`}></i>
          <div className="text-start">
            <h5 className="mb-1">{item.title}</h5>
            <span>{item.value}</span>
          </div>
        </div>
      ))}

      <div>
        <Iframe
          url={mapsurl}
          width="640px"
          height="252px"
          id=""
          className="position-relative w-100"
          display="block"
          position="relative"
        />
      </div>
    </div>
  );
};

export default index;
