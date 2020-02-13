import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 0 320px;
  opacity: ${ props => props.done ? 0.6 : 1 };
  padding: 0 15px;
  height: 100%;

  & + div {
    border-left: 2px solid rgba(0, 0, 0, 2%);
  }

  header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 42px;

    h2 {
      font-size: 16px;
      font-weight: 500;
      padding: 0 10px;
    }

    button {
      border-radius: 18px;
      background-color: #3b5bfd;
      border: 0;
      cursor: pointer;
      height: 42px;
      width: 42px;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
