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

interface ServiceItemProps {
  icon: string;
  group?: string;
  service: string;
  description: string;
  readmore: string;
}

interface ServiceProps{
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
export type {
  NavItemProps,
  CarouselItemProps,
  HeaderProps,
  CarouselProps,
  aboutProps,
  ServiceItemProps,
  ServiceProps
};
