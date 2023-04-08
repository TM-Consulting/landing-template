import OldProject from "../../components/OldProject";
import { OldProjectsProps } from "../../utils/types";

const index = ({ items, title, header }: OldProjectsProps) => {
  if (!items) return <></>;
  return (
    <div
      className="container-fluid old-projects py-5 wow fadeInUp"
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
        <div className="row g-5">
          {items.map((item, index) => (
            <OldProject {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
