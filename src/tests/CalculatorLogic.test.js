

import {handleFunction} from '../CalculatorLogic';
import {changeSign} from '../CalculatorLogic';

it ('changes from positve to negative', () => {
  expect(changeSign('1')).toBe('-1')
  expect(changeSign('3.14')).toBe('-3.14')
  expect(changeSign('0.14')).toBe('-0.14')
})

it ('changes from negative to positive', () => {
  expect(changeSign('-1')).toBe('1')
  expect(changeSign('-3.14')).toBe('3.14')
  expect(changeSign('-0.14')).toBe('0.14')
})

// it ('rejects non-numerics', () => {
//   expect(changeSign('a')).toThrow()
// })