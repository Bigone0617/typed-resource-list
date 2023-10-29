import React, { useState } from "react";
import ButtonComponent, { InputEnum } from "../common/ButtonComponent";

const ResourceUrlInput: React.FC<{}> = () => {
  const [showUrlInput, setShowUrlInput] = useState(false);
  const onClickHander = () => {
    setShowUrlInput(!showUrlInput);
  };

  return (
    <>
      <ButtonComponent
        title="URL 추가"
        onClickHandler={onClickHander}
        type={InputEnum.URL}
      />
      {showUrlInput ? <>url</> : null}
    </>
  );
};

export default ResourceUrlInput;
