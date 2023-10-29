import React from "react";
import styled from "styled-components";
import { TypedIcon } from "typed-design-system";

const Resource: React.FC<{}> = () => {
  return (
    <ResourceItem>
      <TextRead>text입니다!!!</TextRead>
      <ButtonArea>
        <TypedIcon icon="edit_19" style={{ fontSize: "19px" }} />
        <TypedIcon icon="trash_19" style={{ fontSize: "19px" }} />
      </ButtonArea>
    </ResourceItem>
  );
};

const ResourceItem = styled.div`
  width: 260px;
  height: 90px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--gray-gray-100, #fff);
`;

const TextRead = styled.div`
  width: 236px;
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ButtonArea = styled.div`
  color: #000;
  display: flex;
  justify-content: end;
  gap: 8px;
  padding: 12px;
`;

export default Resource;
