const randomSuccess = (): boolean => {
  const successProbability = 0.8;
  const randomValue = Math.random();

  if (randomValue < successProbability) {
    return true;
  } else {
    return false;
  }
};

export default randomSuccess;
