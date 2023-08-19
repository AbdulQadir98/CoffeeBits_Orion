const checkEmptyField = (objectToCheck, requiredFields) => {
  const missingFields = [];

  for (const requiredField of requiredFields) {
    if (!objectToCheck[requiredField]) {
      missingFields.push(requiredField);
    }
  }

  return missingFields;
};

const checkValidDate = (date) => {
  const currentDate = new Date();
  return date >= currentDate;
};

module.exports = { checkEmptyField, checkValidDate };
