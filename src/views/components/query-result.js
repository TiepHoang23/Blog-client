import React from 'react';
import styled from '@emotion/styled';
import Spinner from 'react-bootstrap/Spinner';

/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const QueryResult = ({ loading, error, data, children }) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <SpinnerContainer>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </SpinnerContainer>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};

export default QueryResult;

/** Query Result styled components */
const SpinnerContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
});
