import React from "react";
import styled from "styled-components";
import ResourceListHeader from "../components/resource/ResourceListHeader";
import ResourceList from "../components/resource/ResourceList";

const ResourceListLayout: React.FC<{}> = () => {
  return (
    <ListLayout>
      <ResourceListHeader />
      <ResourceList />
    </ListLayout>
  );
};

const ListLayout = styled.div`
  display: flex;
  width: 280px;
  height: 800px;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background: var(--gray-gray-97, #f7f7f7);
`;

export default ResourceListLayout;
