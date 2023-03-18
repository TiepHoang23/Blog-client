import React from 'react';
import styled from '@emotion/styled';

/**
 * Footer is useless component to make our app look a little closer to a real website!
 */
const Footer = ({ children }) => {
  return (
    <FooterContainer>HOÀNG VĂN TIỆP - BÀI TEST BIZZI 2023 ©</FooterContainer>
  );
};

export default Footer;

/** Footer styled components */
const FooterContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 30,
  height: 200,
  padding: 20,
  backgroundColor: 'white',
});
