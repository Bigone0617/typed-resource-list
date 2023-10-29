import React from "react";
import styled from "styled-components";

const ViewerLayout: React.FC<{}> = () => {
  return <Viewer></Viewer>;
};

const Viewer = styled.div`
  display: flex;
  width: 919px;
  height: 800px;
  padding-bottom: 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export default ViewerLayout;
