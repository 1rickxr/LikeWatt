import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  border-bottom: 2px solid #9dcf56;
  margin-bottom: 1rem;
  `;

const Header = ({ title }) => {
  return (
    <StyledHeader>
    <img src="logo.png" alt="Logo" />
    </StyledHeader>
  );
};

export default Header;
