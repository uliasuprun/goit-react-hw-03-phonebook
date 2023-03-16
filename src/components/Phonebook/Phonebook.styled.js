import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid black;
  background-color: darkred;
  color: #ffffff;
  border-radius: 10px 0 10px 0;
`;
export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  font-size: 14px;
`;
export const Input = styled.input`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  outline: none;
  &:hover,
  &:focus,
  &:active {
    border-color: beige;
  }
`;

export const Button = styled.button`
  margin: 10px;
  cursor: pointer;
  background: beige;
  border: 1px solid black;
  border-radius: 10px 0 10px 0;
  font-size: 14px;
  padding: 5px 10px;
  &:hover {
    background: #000000;
    border: 1px solid beige;
    color: #ffffff;
  }
`;
