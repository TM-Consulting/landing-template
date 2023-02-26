import { OldProjectItem } from "../../utils/types";
const index = ({ image, name, description }: OldProjectItem) => {
  return (
    <div
      className="col-lg-4 wow slideInUp"
      data-wow-delay="0.3s"
      style={{
        visibility: "visible",
        animationDelay: "0.3s",
        animationName: "slideInUp",
      }}
    >
      <div className="position-relative rounded-top">
        <img
          className="img-fluid rounded-top w-100"
          src={require(`../../config/images/${image}`)}
          alt=""
          style={{ height: "400px" }}
        />
      </div>
      <div className="bg-primary text-center rounded-bottom p-4">
        <h3 className="text-white">{name}</h3>
        <p className="text-white m-0">{description}</p>
      </div>
    </div>
  );
};

export default index;
