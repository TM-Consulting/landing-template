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

interface TestimonialItem {
  image: string;
  description: string;
  clientName?: string;
  profession?: string;
}
interface TestimonialProps {
  header: string;
  title: string;
  items: TestimonialItem[];
}

interface CareerItem {
  image: string;
  title: string;
  description: string;
}
interface CareerProps {
  header: string;
  title: string;
  items: CareerItem[];
}
interface HeroHeaderProps {
  title: string;
  child: { text: string; url: string };
  parent: { text: string; url: string };
  description?: string;
  bgImage?: string;
  color?: string;
}
interface ContactElementProps {
  title: string;
  value: string;
  type: string;
}
interface ContactProps {
  header: string;
  title: string;
  form: FormProps;
  contactInfos: ContactElementProps[];
  mapsurl: string;
}

interface FormFieldProps {
  id: string;
  type: string;
  required: boolean;
  placeholder: string;
  fullWidth?: boolean;
  order: number;
  minlength?: number;
}
interface FormProps {
  fields: FormFieldProps[];
  buttonTitle: string;
  errorMessage: string;
}

interface CandidatureProps {
  header: string;
  title: string;
  form: FormProps;
}
export type {
  NavItemProps,
  ContactProps,
  CarouselItemProps,
  HeaderProps,
  CarouselProps,
  aboutProps,
  ServiceItemProps,
  ServiceProps,
  TestimonialProps,
  TestimonialItem,
  FooterProps,
  CopyrightProps,
  LinksItemProps,
  linkTitleProps,
  ContactInfoProps,
  SocialMediaLinksProps,
  HeroHeaderProps,
  OldProjectsProps,
  OldProjectItem,
  CareerProps,
  CareerItem,
  FormProps,
  FormFieldProps,
  CandidatureProps,
};
