import React from "react";
import ResourceDetail from "./Resource";

import useStore from "../../store/store";
import styled from "styled-components";

const ResourceList: React.FC<{}> = () => {
  const {resources} = useStore();

  return (
    <List>
      {
        resources.sort((current, next) => {
          if(current.createdTime < next.createdTime){
            return 1
          }else if(current.createdTime > next.createdTime){
            return -1
          }else{
            return 0
          }
        }).map((resource)=> <ResourceDetail key={resource.id} {...resource}/>)
      }
    </List>
  );
};

const List = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`

export default ResourceList;
