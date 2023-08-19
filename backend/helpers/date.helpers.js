const dateDifferenceValidCheck = (departureDate, returnDate) => {
  const timeDifference = returnDate - departureDate;
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days

  return daysDifference >= 3;
};

module.exports = { dateDifferenceValidCheck };
