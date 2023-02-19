interface NavItemProps {
  url: string;
  text: string;
  isActive: boolean;
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

export type { NavItemProps, CarouselItemProps };
