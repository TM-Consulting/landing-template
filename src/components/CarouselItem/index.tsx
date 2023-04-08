import { Link } from "react-router-dom";
import { CarouselItemProps } from "../../utils/types";
const index = ({
  image,
  title,
  subTitle,
  isActive,
  buttons,
}: CarouselItemProps) => {
  return (
    <div className={`carousel-item ${isActive && "active"}`}>
      <img
        className="w-100"
        src={require(`../../config/images/${image}`)}
        alt="Image"
        style={{ height: '120vh', objectFit: 'cover' }}
      />
      <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
        <div className="p-3" style={{ maxWidth: "900px" }}>
          <h1 className="display-1 text-white mb-md-4 animated zoomIn">
            {title}
          </h1>
          <h5 className="text-white text-uppercase animated bounceInDown">
            {subTitle}
          </h5>

          {buttons &&
            buttons.length &&
            buttons.map((item, index) => (
              <Link
                to={item.url}
                className={`btn py-md-3 px-md-5 me-3 animated  ${
                  !(index % 2)
                    ? "btn-primary slideInLeft"
                    : " btn-secondary slideInRight"
                }`}
              >
                {item.text}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
index.defaultProps = {
  isActive: false,
};

export default index;
