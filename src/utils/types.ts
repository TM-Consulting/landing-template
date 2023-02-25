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

export type { NavItemProps, CarouselItemProps, HeaderProps, CarouselProps };
