import toast from "react-hot-toast";

export const randomDelay = (): Promise<void> => {
  const minDelay: number = 300;
  const maxDelay: number = 1000;
  const delay: number =
    Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

  console.log(`Delay time : ${delay}`);

  return new Promise((resolve) => {
    toast.loading("uploading...", { duration: delay });
    setTimeout(() => {
      resolve();
    }, delay);
  });
};
