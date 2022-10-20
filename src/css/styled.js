import styled from 'styled-components';

export const ProductArea = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;

  div {
    height: 320px;
    width: 250px;
    border: 1px solid rgb(194, 193, 193);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;

    button {
      font-size: 25px;
      background: transparent;
      border: none;
      color: crimson;
    }
  }
`;