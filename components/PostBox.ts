import styled from 'styled-components';

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 1px;

  p {
    font-size: 19px;
    line-height: 190%;
    margin: 0px;
  }

  h1 {
    margin: 0px;
    color: #333;
    font-weight: 600;
  }

  h2 {
    color: #333;
    font-weight: 600;
  }

  a {
    text-transform: none;
    font-size: 19px;
    font-weight: 400;
    background: none;
    padding: 0;
    display: inline;
    margin: 0;
    color: #2962ff;
    text-decoration: none;
    border-bottom: 1px solid #ddd;
    padding-bottom: 2px;
    box-shadow: none;
  }
`;

export default PostBox;
