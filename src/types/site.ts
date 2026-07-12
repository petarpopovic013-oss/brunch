export interface NavigationItem {
  label: string;
  href: string;
}

export interface ImageSlide {
  src: string;
  alt: string;
}

export interface MenuCardData extends ImageSlide {
  title: string;
  href: string;
}

export interface ReservationFormData {
  partySize: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  requests: string;
}
