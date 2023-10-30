import React from "react";
import styled from "styled-components";
import useStore from "../../store/store";

const Viewer: React.FC<{}> = () => {
  const store = useStore();
  return (
    <ViewerLayout>
      <iframe
        title={store.viewUrl}
        src={store.viewUrl}
        style={{ width: "919px", height: "750px" }}
      />
    </ViewerLayout>
  );
};

const ViewerLayout = styled.div`
  width: 919px;
  height: 800px;
`;

export default Viewer;
