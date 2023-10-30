import React from "react";
import ButtonComponent, { InputEnum } from "../common/ButtonComponent";
import checkImageFile from "../../util/checkImageFile";
import useStore from "../../store/store";
import toast from "react-hot-toast";

const ResourceImageInput: React.FC<{}> = () => {
  const store = useStore();
  const onChnageHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ?? [];
    const filesToArray = Array.from(files);

    if (!files || files?.length === 0) return;

    filesToArray.forEach(async (file) => {
      try {
        const fileData = await checkImageFile(file);
        store.setNewResource(fileData);
        store.addResource(file.name);
        toast.success("이미지 업로드 성공");
      } catch (err) {
        toast.error("이미지 업로드 실패");
      }
    });

    return;
  };

  return (
    <>
      <ButtonComponent
        title="이미지 추가"
        onChnageHandler={onChnageHandler}
        type={InputEnum.IMG}
      />
    </>
  );
};

export default ResourceImageInput;
