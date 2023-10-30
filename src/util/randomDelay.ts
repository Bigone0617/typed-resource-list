
export const randomDelay = () => {
    const randomDelay = (Math.floor(Math.random() * (6)) + 3) * 100;
    setTimeout(() => {return}, randomDelay);
}