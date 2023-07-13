
export interface products {
  descriptions?: string;
  bold?:boolean;
  small?: number | string;
  medium?: number | string;
  large?: number | string;
  extraLarge?: number | string;
}

let ELEMENT_DATA: products[] = [
  { small: 'Small ($5)', medium: 'Medium ($7)', large: 'Large ($8)', extraLarge: 'Extra Large ($9)' },
  { descriptions: 'Vegetable Options', bold: true },
  { descriptions: 'Tomatoes', small: 1, medium: 1, large: 1, extraLarge: 1 },
  { descriptions: 'Onions', small: 0.50, medium: 0.50, large: 0.50, extraLarge: 0.50 },
  { descriptions: 'Bell Peppers', small: 1, medium: 1, large: 1, extraLarge: 1 },
  { descriptions: 'Mushrooms', small: 1.20, medium: 1.20, large: 1.20, extraLarge: 1.20 },
  { descriptions: 'Pineapple', small: 3, medium: 3, large: 3, extraLarge: 3 },
  { descriptions: 'Non Vegetable Options', bold: true },
  { descriptions: 'Sausage', small: 1, medium: 1, large: 1, extraLarge: 1 },
  { descriptions: 'Pepperoni', small: 2, medium: 2, large: 2, extraLarge: 2 },
  { descriptions: 'Barbecue Chicken', small: 3, medium: 3, large: 3, extraLarge: 3 },
  {},
  { descriptions: 'Total', bold: true },
  { descriptions: 'Offer' },
  { large: 'Total' },
];
