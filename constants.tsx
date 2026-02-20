import { Barber, Service } from './types';

export const BARBERS: Barber[] = [
  {
    name: "JULIAN VANCE",
    handle: "@vancecuts",
    bio: "Twelve years of mastery blending old-school discipline with modern texture. Julian specializes in structural haircuts that age with grace.",
    image: "https://images.unsplash.com/photo-1593702288056-7927b442d0fa?q=80&w=800&h=1000&auto=format&fit=crop",
    instagram: "vancecuts"
  },
  {
    name: "MARCUS REED",
    handle: "@reedshear",
    bio: "The detail specialist. Marcus focuses on precision fades and sharp geometric design, ensuring every line defines the character of the cut.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&h=1000&auto=format&fit=crop",
    instagram: "reedshear"
  },
  {
    name: "SILAS COVE",
    handle: "@cove.grooming",
    bio: "Intuitive energy focused on effortless, lived-in styles. Silas excels at creating looks that feel authentic to the individual.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&h=1000&auto=format&fit=crop",
    instagram: "cove.grooming"
  },
  {
    name: "SAGE MERRITT",
    handle: "@sage.shears",
    bio: "Creative director specializing in bold transformations. Sage balances technical precision with intentional, gender-affirming styles.",
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=800&h=1000&auto=format&fit=crop",
    instagram: "sage.shears"
  }
];

export const SERVICES: Service[] = [
  {
    id: 'haircut',
    title: "SIGNATURE CUT",
    subtitle: "PRECISION & STYLE",
    description: "A tailored haircut designed for your lifestyle and face shape. Includes a thorough consultation, shampoo service, precision cut, and a hot lather neck shave with premium aftershave finish.",
    price: "$45 to $65",
    icon: 'haircut'
  },
  {
    id: 'beard',
    title: "SCULPTED BEARD",
    subtitle: "DETAIL & CONDITION",
    description: "Complete beard shaping and length reduction using both shears and clippers. Finished with a straight razor line-up, aromatic oils, and a soothing facial massage with cooling towels.",
    price: "$30 to $45",
    icon: 'beard'
  },
  {
    id: 'shave',
    title: "TRADITIONAL SHAVE",
    subtitle: "THE ULTIMATE RITUAL",
    description: "The gold standard of grooming. Multiple rounds of steamed towels and rich hot lather prepare the skin for a double-pass straight razor shave. Concludes with a cold towel and skin-toning treatment.",
    price: "$50 to $70",
    icon: 'shave'
  }
];