const CounterStep = (step = 0, action) => {
  // console.log(step)
  switch (action.type) {
    case "increase":
      return step + 1;
    case "decrease":
      return step - 1;
    case "doubledecrease":
      return step - 2;
    case "resetstep":
      return (step = 0);
    case "restartstep":
      return (step = 2);
    default:
      return step;
  }
};

export default CounterStep;
