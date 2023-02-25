interface NavItemProps {
  url: string;
  text: string;
  isActive?: boolean;
  show: boolean;
}
interface CarouselItemButtons {
  url: string;
  text: string;
}

interface CarouselItemProps {
  image: string;
  title: string;
  subTitle: string;
  isActive: boolean;
  buttons?: CarouselItemButtons[];
}

interface CarouselProps {
  items: CarouselItemProps[];
}
interface OldProjectItem {
  image: string;
  name: string;
  description: string;
}
interface OldProjectsProps {
  items: OldProjectItem[];
  header: string;
  title: string;
}
interface CompanyName {
  fPart?: string;
  lPart?: string;
}
interface HeaderProps {
  companyName: CompanyName;
  phoneNumber: string;
  phoneBgColor: string;
  navLinks: NavItemProps[];
}

interface linkTitleProps {
  linkTitle: string;
  linkRef: string;
}
interface LinksItemProps {
  title: string;
  linksTitles: linkTitleProps[];
}

interface ContactInfoProps {
  title: string;
  companyAddress: string;
  phoneNumber: string;
  emailAddress: string;
}

interface SocialMediaProps {
  provider: string;
  link: string;
}

interface SocialMediaLinksProps {
  title: string;
  SocialMediaLinks: SocialMediaProps[];
}
interface FooterProps {
  pagelinks: LinksItemProps[];
  contactinfo: ContactInfoProps;
  socialmedialinks: SocialMediaLinksProps;
}

interface CopyrightProps {
  companyName: string;
  producerName: string;
  producerLink: string;
  mention: string;
  designedby: string;
}

interface ServiceItemProps {
  icon: string;
  group?: string;
  service: string;
  description: string;
  readmore: string;
}

interface ServiceProps {
  title: string;
  description: string;
  items: ServiceItemProps[];
}

interface aboutProps {
  title: string;
  titleOffer?: string;
  description: string;
  yearsOfExp?: string;
  certificates?: string;
}

interface testimonialItem {
  image: string;
  description: string;
  clientName?: string;
  profession?: string;
}
interface testimonialProps {
  header: string;
  title: string;
  items: testimonialItem[];
}
interface HeroHeaderProps {
  title: string;
  child: { text: string; url: string };
  parent: { text: string; url: string };
  bgImage?: string;
}
export type {
  NavItemProps,
  CarouselItemProps,
  HeaderProps,
  CarouselProps,
  aboutProps,
  ServiceItemProps,
  ServiceProps,
  testimonialProps,
  testimonialItem,
  FooterProps,
  CopyrightProps,
  LinksItemProps,
  linkTitleProps,
  ContactInfoProps,
  SocialMediaLinksProps,
  HeroHeaderProps,
  OldProjectsProps,
  OldProjectItem,
};
