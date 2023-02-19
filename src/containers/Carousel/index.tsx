import { siteData } from "../../utils/config";
import CarouselItem from "../../components/CarouselItem";

const index = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {siteData?.pages?.home?.containers?.carousel?.items.map(
            (item, index) => (
              <button
                type="button"
                data-bs-target="#header-carousel"
                data-bs-slide-to={`${index}`}
                className={`${
                  index ===
                    siteData?.pages?.home?.containers?.carousel?.items.length -
                      1 && "active"
                }`}
                aria-label={` Slide ${index + 1}`}
                aria-current={`${
                  index ===
                    siteData?.pages?.home?.containers?.carousel?.items.length -
                      1 && "true"
                }`}
              ></button>
            )
          )}
          {/* <button
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide-to="0"
            className=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="active"
            aria-current="true"
          ></button> */}
        </div>
        <div className="carousel-inner">
          {siteData?.pages?.home?.containers?.carousel?.items.map(
            (item, index) => (
              <CarouselItem {...item} key={index} isActive={index === 0} />
            )
          )}
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
