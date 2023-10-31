import { randomDelay } from "./randomDelay";
import randomSuccess from "./randomSuccess";

const checkImageFile = async (file: File) => {
  await randomDelay();

  if (randomSuccess()) {
    return await readImageFile(file);
  } else {
    throw new Error("랜던 실패")
  }
};

function readImageFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const imageUrl = event.target?.result as string;
      resolve(imageUrl);
    };

    reader.onerror = function (event) {
      reject(new Error("이미지를 읽는 중 오류가 발생했습니다."));
    };

    reader.readAsDataURL(file);
  });
}

export default checkImageFile;
