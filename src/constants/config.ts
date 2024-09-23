interface NavLink {
  href: string;
  label: string;
}

interface Shoe {
  thumbnail: ImageMetadata;
  bigShoe: ImageMetadata;
}

interface Statistic {
  value: string;
  label: string;
}

interface Product {
  imgURL: ImageMetadata;
  name: string;
  price: string;
}

interface Service {
  imgURL: ImageMetadata;
  label: string;
  subtext: string;
}

interface Review {
  imgURL: ImageMetadata;
  customerName: string;
  rating: number;
  feedback: string;
}

interface FooterLink {
  title: string;
  links: { name: string; link: string }[];
}

interface SocialMedia {
  src: ImageMetadata;
  alt: string;
}