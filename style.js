import styled from 'styled-components';
import { motion } from 'framer-motion';

export const altColor = '#ffc107';

export const Name = styled.h5`
  font-size: 1rem;
`;

export const Paragraph = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
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
  width: auto;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Profile = styled(motion.div)`
  max-width: 250px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
