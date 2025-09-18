export type Review = {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
};

export type Medication = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  uses: string[];
  sideEffects: string[];
  interactions: string[];
  reviews: Review[];
  price: number;
};

export type Condition = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  symptoms: string[];
  treatments: string[];
};

export type Pharmacy = {
  name: string;
  address: string;
  distance: string;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  location: string;
  imageUrl: string;
  imageHint: string;
};

export type BabyCareProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageHint: string;
};

export type NutritionProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageHint: string;
};

export type AyurvedaProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageHint: string;
};

export type Brand = {
  id: string;
  name: string;
  logoUrl: string;
  imageHint: string;
  description: string;
};

export type HealthDevice = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageHint: string;
};

export type HomeEssential = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageHint: string;
};

export type WomenCareProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageHint: string;
};

export type PersonalCareProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageHint: string;
};
