import React from "react";
import "./App.css";
import ResourceListLayout from "./layout/ResourceListLayout";
import styled from "styled-components";
import ViewerLayout from "./layout/ViewerLayout";

function App() {
  return (
    <PageLayout className="App">
      <ResourceListLayout />
      <DivisionLine />
      <ViewerLayout />
    </PageLayout>
  );
}

const PageLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  background: var(--gray-gray-94, #f0f0f0);
`;

const DivisionLine = styled.div`
  width: 0.25%;
  height: 100%;
  flex-shrink: 0;
  background: #c4c4c4;
`;

export default App;
