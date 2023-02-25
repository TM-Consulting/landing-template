import { HeroHeaderProps } from "../../utils/types";
import { Link } from "react-router-dom";

const index = (props: HeroHeaderProps) => {
  const { title, child, parent, bgImage } = props;
  if (!props) return <></>;
  return (
    <div
      className="container-fluid bg-primary p-5 hero-header mb-5"
      style={{
        color: "red",
        backgroundImage: `url(${require(`../../config/images/${bgImage}`)})`,
      }}
    >
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
      </div>
    </div>
  );
};

export default index;
