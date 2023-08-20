const locationMapping = {
    Earth: 1,
    Venus: 2,
    Saturn: 3,
    Moon: 4,
  };
  
export const getLocationCode = (location) => {
  return locationMapping[location] || 1; 
};