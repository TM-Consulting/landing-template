import { TestimonialItem } from "../../utils/types";

const index = ({
  image,
  description,
  clientName,
  profession,
}: TestimonialItem) => {
  return (
    <div className="owl-item">
      <div className="text-center pb-4">
        <img
          className="img-fluid mx-auto rounded-circle"
          src={require(`../../config/images/${image}`)}
          style={{ width: "100px", marginRight: "100px" }}
          alt=""
        />
        <div className="testimonial-text bg-light rounded p-4 mt-n5">
          <p className="mt-5">{description}</p>
          <h4 className="text-truncate">{clientName}</h4>
          <i>{profession}</i>
        </div>
      </div>
    </div>
  );
};

export default index;
