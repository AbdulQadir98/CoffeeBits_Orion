const getSeatCountForClass = (passengers) => {
  seatCount = {
    business: 0,
    economy: 0,
    first: 0,
  };
  for (const passenger in passengers) {
    if (passenger.class === "business") {
      seatCount.business++;
    } else if (passenger.class === "economy") {
      seatCount.economy++;
    } else if (passenger.class === "first") {
      seatCount.first++;
    }
  }

  return seatCount;
};

module.exports = { getSeatCountForClass };
