/**
 * style.js file created to maintain readibility of team bio's
 * Framer motion dependency used to add smoother tranistion to page
 */

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const altColor = '#393937';

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

export const Circle = styled.div`
  border-radius: 50%;
  width: 255px;
  height: 255px;
  left: 47px;
  position: relative;
  top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6d604f;
  color: #e4af3a;
  text-align: center;
  font-size: 1.5rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media (max-width: 780px) {
    display: none;
  }
`;
