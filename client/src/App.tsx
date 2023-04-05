import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import PostContextProvider from './contexts/PostContext';
import PostsPage from './PostsPage';

function App(): JSX.Element {
  // const expensiveEncrypt = (arr: PostType[]): string[] => {
  //   const result = [];
  //   for (let i = 0; i < 1000; i++) {
  //     result.push(`${JSON.stringify(arr)} ${Math.random()}`);
  //   }
  //   return result;
  // };

  // const result = useMemo(() => expensiveEncrypt(posts), []);
  // console.log(result);

  return (
    <PostContextProvider>
      <Container>
        <Row>
          <Col xs={8}>
            <PostsPage />
          </Col>
        </Row>
      </Container>
    </PostContextProvider>
  );
}

export default App;
