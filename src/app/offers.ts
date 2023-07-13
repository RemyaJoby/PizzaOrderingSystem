
export interface Offer {
    title: string;
    disabled?: boolean;
    description: string;
    price: number | string;
  }

  let  ELEMENT_DATA:Offer[] = [
    { title: 'Offer 1', description: '1 medium pizza with 2 toppings', price: '$5' },
    { title: 'Offer 2', description: '2 Medium size pizza with 4 toppings each', price:'$9' },
    { title: 'Offer 3', description: '1 large pizza with 4 toppings (pepperoni and barbecue chicken count as 2 toppings)', price: '50% off' }
  ];