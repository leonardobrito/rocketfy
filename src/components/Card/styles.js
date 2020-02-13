import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  cursor: grab;
  margin-bottom: 10px;
  padding: 15px;
  position: relative;

  header {
    left: 15px;
    position: absolute;
    top: -22px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    border-radius: 2px;
    height: 24px;
    margin-top: 5px;
    width: 24px;
  }

  ${props => props.isDragging && css`
    background-color: transparent;
    border: 2px dashed rgba(0, 0, 0, 0.2);
    border-radius: 0;
    box-shadow: none;
    cursor: grabbing;
    padding-top: 31px;

    p, img, header {
      opacity: 0;
    }
  `}
`;

export const Label = styled.span`
  background-color: ${ prop => prop.color };
  border-radius: 2px;
  display: inline-block;
  height: 10px;
  width: 10px;
`;
