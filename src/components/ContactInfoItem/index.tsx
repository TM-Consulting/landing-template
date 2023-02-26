import { ContactProps } from "../../utils/types";
import Iframe from "react-iframe";
const index = ({ contactInfos }: ContactProps) => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5 wow slideInUp" data-wow-delay="0.6s">
            <div className="bg-light rounded p-5">
              {contactInfos.map((item, index) => (
                <div className="d-flex align-items-center mb-2">
                  <i
                    className={`bi bi-${item.type} fs-1 text-primary me-3`}
                  ></i>
                  <div className="text-start">
                    <h5 className="mb-1">{item.title}</h5>
                    <span>{item.value}</span>
                  </div>
                </div>
              ))}

              <div>
                <Iframe
                  url="https:////www.google.com/maps/embed/v1/place?key=AIzaSyB54yZs0KUa3ip6ecUpLsfatKOFjc7XyME&q=63+rue+du+lieutenant+colonnel+prudhon+Argenteuil+95100"
                  width="640px"
                  height="230px"
                  id=""
                  className="position-relative w-100"
                  display="block"
                  position="relative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
