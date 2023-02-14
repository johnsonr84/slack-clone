import React from 'react'
import styled from 'styled-components';

function Sidebar() {
  return (
    <SidebarContainer>

    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;