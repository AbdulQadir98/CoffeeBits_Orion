// Passenger options
const options = {
  class: [
    { value: 'business', label: 'Business Class' },
    { value: 'economy', label: 'Economy Class' },
    { value: 'first', label: 'First Class' },
  ],
  food: [
    { value: 'veg', label: 'Veg' },
    { value: 'nonveg', label: 'Non-Veg' },
  ],
};
export { options };

// Destination locations
export const locations = [
  { value: 'Earth', label: 'Earth' },
  { value: 'Venus', label: 'Venus' },
  { value: 'Saturn', label: 'Saturn' },
  { value: 'Moon', label: 'Moon' },
];

// Assuming all the travel Duration is a constant
export const duration = "9h 25min"

// Limited to only one service provider
export const serviceProvider = "InterGalactic"

  