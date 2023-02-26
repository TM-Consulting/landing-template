import { CareerItem } from "../../utils/types";

const index = ({ image, title, description }: CareerItem) => {
  return (
    <div className="owl-item">
      <div className="text-center pb-4 bg-light rounded p-4">
        <img
          className="mx-auto"
          src={require(`../../config/images/${image}`)}
          style={{ width: "300px", height: "150px", marginRight: "100px" }}
          alt=""
        />
        <h4 className="text-truncate mt-4">{title}</h4>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
};

export default index;
