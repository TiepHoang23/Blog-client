import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
/**
 * Header renders the top navigation
 * for this particular tutorial level, it only holds the home button
 */
const Header = ({ children }) => {
  return (
    <HeaderBar>
      <Container>
        <HomeButtonContainer>
          <HomeLink to='/'>
            <HomeButton>
              <Title>
                <h3>MyBlog</h3>
                <div>Test</div>
              </Title>
            </HomeButton>
          </HomeLink>
          <Button>
            <Link to='/login'>
              <h3>Login</h3>
            </Link>
          </Button>
        </HomeButtonContainer>
        {children}
      </Container>
    </HeaderBar>
  );
};

export default Header;

/** Header styled components */
const HeaderBar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  padding: '5px 30px',
  minHeight: 80,
  backgroundColor: 'white',
});

const Container = styled.div({
  width: 500,
});

const HomeLink = styled(Link)({
  textDecoration: 'none',
});

const HomeButtonContainer = styled.div({
  display: 'flex',
  flex: 1,
});

const HomeButton = styled.div({
  display: 'flex',
  flexDirection: 'row',

  alignItems: 'center',
});

const Title = styled.div({
  display: 'flex',
  flexDirection: 'column',
  h3: {
    lineHeight: '1em',
    marginBottom: 0,
  },
  div: {
    fontSize: '0.9em',
    lineHeight: '0.8em',
    paddingLeft: 2,
  },
});
