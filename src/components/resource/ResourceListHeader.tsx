import React from "react";
import ResourceUrlInput from "./ResourceUrlInput";
import ResourceImageInput from "./ResourceImageInput";
import styled from "styled-components";

const ResourceListHeader: React.FC<{}> = () => {
  return (
    <ListHeader>
      <ResourceUrlInput />
      <ResourceImageInput />
    </ListHeader>
  );
};

const ListHeader = styled.div`
  display: flex;
  width: 280px;
  height: 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background: var(--gray-gray-100, #fff);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
`;

export default ResourceListHeader;
