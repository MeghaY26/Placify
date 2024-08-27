// SidebarLayout.js
import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/index";

const LayoutContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const SidebarLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <Content>
        {children}
      </Content>
    </LayoutContainer>
  );
};

export default SidebarLayout;
