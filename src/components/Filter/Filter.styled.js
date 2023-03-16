import styled from 'styled-components';

export const FindByName = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
`;

export const FilterInput = styled.input`
  width: 70%;
  outline: none;
  &:hover,
  &:focus,
  &:active {
    border-color: darkred;
  }
`;
