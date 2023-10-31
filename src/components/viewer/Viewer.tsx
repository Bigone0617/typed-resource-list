import React from "react";
import styled from "styled-components";
import useStore, { ResourceType } from "../../store/store";

const Viewer: React.FC<{}> = () => {
  const store = useStore();
  return (
    <ViewerLayout>
      {
        store.viewer?.type === ResourceType.URL ? (
          <iframe
            title={store.viewer?.title}
            src={store.viewer?.resource}
            style={{ width: "919px", height: "750px" }}
          />
        ) : (
          <img src={store.viewer?.resource} alt={store.viewer?.title} style={{ width: "919px", height: "750px" }}>
          </img>
        )
      }
      
    </ViewerLayout>
  );
};

const ViewerLayout = styled.div`
  width: 919px;
  height: 800px;
`;

export default Viewer;
