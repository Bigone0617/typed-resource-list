import React from "react";
import ButtonComponent, { InputEnum } from "../common/ButtonComponent";

const ResourceImageInput: React.FC<{}> = () => {
  const onClickHander = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    return;
  };

  return (
    <>
      <ButtonComponent
        title="이미지 추가"
        onChnageHandler={onClickHander}
        type={InputEnum.IMG}
      />
    </>
  );
};

export default ResourceImageInput;
