import { randomDelay } from "./randomDelay";

export const checkUrlData = async (url: string): Promise<string> => {
  await randomDelay();

  // 1. check http:// or https://
  const RegExp =
    /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  if (!RegExp.test(url)) {
    throw new Error("not inclued http:// or https://");
  }

  // 2. change youtube url
  if (url.indexOf("youtube") > 0) {
    url = url.replace("watch?v=", "embed/");
  }

  return url;
};
