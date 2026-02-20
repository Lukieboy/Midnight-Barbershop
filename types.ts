
export interface Barber {
  name: string;
  handle: string;
  bio: string;
  image: string;
  instagram: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  icon: 'haircut' | 'beard' | 'shave';
}