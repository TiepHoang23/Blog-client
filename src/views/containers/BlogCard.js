import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const { title, author, content, id } = blog;

  return (
    <CardContainer to={`/blog/${id}`}>
      <CardContent>
        <CardBody>
          <CardTitle>{title || ''}</CardTitle>
          <CardFooter>
            {/* <AuthorImage src={author.photo} /> */}
            <AuthorAndBlog>
              {/* <AuthorName>{author.name}</AuthorName> */}
              <Content>{content}</Content>
            </AuthorAndBlog>
          </CardFooter>
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

export default BlogCard;

/** Track Card styled components */
const CardContainer = styled(Link)({
  borderRadius: 6,
  backgroundColor: 'white',
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 380,
  margin: 10,
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  textDecoration: 'none',
});

const CardContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '100%',
});

const CardTitle = styled.h3({
  textAlign: 'center',
  fontSize: '1.4em',
  lineHeight: '1em',
  fontWeight: 700,
  flex: 1,
});

const CardBody = styled.div({
  padding: 18,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
});

const CardFooter = styled.div({
  display: 'flex',
  flexDirection: 'Row',
});

const AuthorImage = styled.img({
  height: 30,
  width: 30,
  marginRight: 8,
  borderRadius: '50%',
  objectFit: 'cover',
});

const AuthorAndBlog = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const AuthorName = styled.div({
  lineHeight: '1em',
  fontSize: '1.1em',
});

const Content = styled.div({
  fontSize: '0.8em',
});
