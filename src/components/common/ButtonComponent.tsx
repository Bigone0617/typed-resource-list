import React from "react";
import styled from "styled-components";

interface ButtonComponentProps {
  title: string;
  onClickHandler?: (e: React.MouseEvent<HTMLElement>) => void;
  onChnageHandler?: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  type: InputEnum;
}

export enum InputEnum {
  URL = "URL",
  IMG = "IMG",
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  title,
  onClickHandler,
  onChnageHandler,
  type,
}) => {
  return (
    <div>
      {type === InputEnum.IMG ? (
        <Button>
          <Label htmlFor="image-upload">{title}</Label>
          <Input
            id="image-upload"
            type="file"
            accept="image/png, image/jpg"
            onClick={(e) => {
              e.currentTarget.value = "";
            }}
            multiple
            onChange={onChnageHandler}
          ></Input>
        </Button>
      ) : (
        <Button onClick={onClickHandler}>{title}</Button>
      )}
    </div>
  );
};

const Button = styled.button`
  display: flex;
  width: 125px;
  height: 30px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  background: #ffffff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Label = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  display: none;
`;

export default ButtonComponent;
