import { FooterProps } from "../../utils/types";
import LinksItem from "./LinksItem";
import ContactItem from "./ContactItem";
import SocialMediaItem from "./SocialMediaItem";
const Footer = ({ pagelinks, contactinfo, socialmedialinks }: FooterProps) => {
  return (
    <div
      className="container-fluid bg-dark text-light mt-5 py-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container pt-5">
        <div className="row g-5">
          {pagelinks.map((item, index) => (
            <LinksItem key={index} {...item} />
          ))}
          <ContactItem {...contactinfo} />
          <SocialMediaItem {...socialmedialinks} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
