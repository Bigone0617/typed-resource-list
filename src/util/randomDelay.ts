export const randomDelay = (): Promise<void> => {
  const minDelay = 300;
  const maxDelay = 1000;
  const delay =
    Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

  console.log(`Delay time : ${delay}`);

  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
