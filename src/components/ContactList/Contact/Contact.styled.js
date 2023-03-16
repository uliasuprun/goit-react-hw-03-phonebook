import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.p`
  font-size: 16px;
  font-weight: bold;
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const BtnInfoDelete = styled.button`
  margin-left: auto;
  cursor: pointer;
  background: darkred;
  color: #fff;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 10px 0 10px 0;
  border: 1px solid black;
  &:hover {
    background: #000;
    border: 1px solid darkred;
  }
`;
