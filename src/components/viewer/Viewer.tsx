import React from "react";
import styled from "styled-components";
import useStore, { ResourceType } from "../../store/store";

const Viewer: React.FC<{}> = () => {
  const store = useStore();
  return (
    <ViewerLayout>
      {
        store.viewer?.type === ResourceType.URL ? (
          <Iframe
            title={store.viewer?.title}
            src={store.viewer?.resource}
          />
        ) : (
          <Img src={store.viewer?.resource} alt={store.viewer?.title}>
          </Img>
        )
      }
      
    </ViewerLayout>
  );
};

const ViewerLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

export default Viewer;
