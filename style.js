import styled from 'styled-components';

export const altColor = '#0d6efd';

export const Name = styled.h5`
  font-size: 1rem;
`;

export const Paragraph = styled.div`
  margin-top: 10px;
  height: 100px;
  width: 190px;
  line-height: 1;
  overflow: auto;
`;

export const Email = styled.div`
  margin-top: 4px;
  background-color: ${altColor};
  color: white;
  font-weight: 600;
  padding: 4px;
  border-radius: 4px;
`;

export const Profile = styled.div`
  max-width: 250px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
