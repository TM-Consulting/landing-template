import { HeroHeaderProps } from "../../utils/types";
import { Link } from "react-router-dom";

const index = (props: HeroHeaderProps) => {
  const { title, child, parent, bgImage, description, color } = props;
  if (!props) return <></>;
  return (
    <div
      className="container-fluid bg-primary p-5 hero-header mb-5"
      style={{
        backgroundImage: `url(${require(`../../config/images/${bgImage}`)})`,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: ` .hero-header p.text-white,
          .hero-header .text-center h1,
          .hero-header .text-center a,
          .hero-header .text-center i {
                color: ${color} !important;
              }
        `,
        }}
      />
      <div className="row py-5">
        <div className="col-12 text-center">
          <h1 className="display-1 text-white animated zoomIn">{title}</h1>
          <Link to={parent.url} className="h4 text-white">
            {" "}
            {parent.text}
          </Link>
          <i className="far fa-circle text-white px-2"></i>
          <Link to={child.url} className="h4 text-white">
            {" "}
            {child.text}
          </Link>
        </div>
        {description && (
          <p
            className=" text-center text-white animated "
            style={{
              margin: "20px auto",
              width: "50%",
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

index.defaultProps = {
  color: "#ffffff",
};

export default index;
