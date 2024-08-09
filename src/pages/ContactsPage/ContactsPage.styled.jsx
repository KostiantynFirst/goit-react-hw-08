import styled from 'styled-components';

export const ContactsPageContainer = styled.div`
  display: block;
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  margin-top: 70px;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const ContactSearchBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
  max-width: 800px;
  margin: 0 auto;
`;

export const SearchFormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;