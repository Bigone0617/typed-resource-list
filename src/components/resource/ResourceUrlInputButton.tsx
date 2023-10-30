import React from "react";
import ButtonComponent, { InputEnum } from "../common/ButtonComponent";

const ResourceUrlInputButton: React.FC<{showInput: () => void}> = ({showInput}) => {

  return (
    <>
      <ButtonComponent
        title="URL 추가"
        onClickHandler={showInput}
        type={InputEnum.URL}
      />
    </>
  );
};


export default ResourceUrlInputButton;
