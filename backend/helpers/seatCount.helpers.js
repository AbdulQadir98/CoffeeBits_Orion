const getSeatCountForClass = (passengers) => {
  seatCount = {
    business: 0,
    economy: 0,
    first: 0,
  };
  for (let passenger in passengers) {
    if (passengers[passenger].class === "business") {
      seatCount.business++;
    } else if (passengers[passenger].class === "economic") {
      seatCount.economy++;
    } else if (passengers[passenger].class === "first") {
      seatCount.first++;
    }
  }

  return seatCount;
};

module.exports = { getSeatCountForClass };
