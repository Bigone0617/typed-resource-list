import React from "react";
import styled from "styled-components";
import ViewerHeader from "../components/viewer/ViewerHeader";
import useStore from "../store/store";
import Viewer from "../components/viewer/Viewer";

const ViewerLayout: React.FC<{}> = () => {
  const store = useStore();
  return (
    <ViewerWrapper>
      {store.viewer !== null ? (
        <>
          <ViewerHeader />
          <Viewer />
        </>
      ) : null}
    </ViewerWrapper>
  );
};

const ViewerWrapper = styled.div`
  width: 69.75%;
  height: 100%;
`;

export default ViewerLayout;
