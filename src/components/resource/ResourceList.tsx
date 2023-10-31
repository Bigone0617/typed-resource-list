import React from "react";
import ResourceDetail from "./Resource";

import useStore from "../../store/store";
import styled from "styled-components";
import { Toaster } from "react-hot-toast";

const ResourceList: React.FC<{}> = () => {
  const { resources } = useStore();

  return (
    <List>
      <Toaster />
      {resources
        .sort((current, next) => {
          if (current.createdTime < next.createdTime) {
            return 1;
          } else if (current.createdTime > next.createdTime) {
            return -1;
          } else {
            return 0;
          }
        })
        .map((resource) => (
          <ResourceDetail key={resource.id} {...resource} />
        ))}
    </List>
  );
};

const List = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  overflow: scroll;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 95%;
  padding-bottom: 10px;
`;

export default ResourceList;
