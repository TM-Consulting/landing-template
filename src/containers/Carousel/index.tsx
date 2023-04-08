import CarouselItem from "../../components/CarouselItem";
import { CarouselProps } from "../../utils/types";

const index = ({ items }: CarouselProps) => {
  if (!items) return <></>;
  return (
    <div className="container-fluid client-carousel p-0 mb-5">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {items.map((item, index) => (
            <button
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide-to={`${index}`}
              className={`${index === items.length - 1 && "active"}`}
              aria-label={` Slide ${index + 1}`}
              aria-current={`${index === items.length - 1 && "true"}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {items.map((item, index) => (
            <CarouselItem {...item} key={index} isActive={index === 0} />
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default index;
