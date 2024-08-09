import styled from 'styled-components';

export const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #d1d1d6;
  border-radius: 12px;
  background-color: #f9f9f9;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  gap: 15px;
`;

export const SearchLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SearchLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

export const SearchInput = styled.input`
  height: 36px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: #fff;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007aff;
    outline: none;
  }
`;