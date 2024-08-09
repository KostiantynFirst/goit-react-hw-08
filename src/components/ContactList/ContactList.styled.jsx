import styled from 'styled-components';

export const ListContainerLabel = styled.div`
   margin: 0 auto;
  padding: 16px;
  max-width: 1200px; /* Adds a maximum width for better content alignment */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Spacing between child elements */
`

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-left: 0;
`;

export const ListItem = styled.li`
  display: flex;
  // width: 450px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d1d1d6;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Message = styled.p`
  font-size: 18px;
  color: #333;
  text-align: center;
  padding: 20px;
`;