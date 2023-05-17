

import {handleFunction} from '../CalculatorLogic';
import { changeSign } from '../CalculatorLogic';
import { calculate } from '../CalculatorLogic';
import { pushOperator } from '../CalculatorLogic';

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

it('returns error string if multiple clicks', () => {
  expect(calculate('1/0')).toBe('ERROR')
})

it('changes previously entered operator to last entered operator', () => {
  expect(pushOperator('2+3-', '+', '0', true)).toBe('2+3+')
  expect(pushOperator('2.5*', '/', '0', true)).toBe('2.5/')
  expect(pushOperator('0.75+3.55/', '-', '0', true)).toBe('0.75+3.55-')
})

it('adds an operator to equation', () => {
  expect(pushOperator('4-2/', '+', '0.9')).toBe('4-2/0.9+')
  expect(pushOperator('3.15/1.5+', '*', '8')).toBe('3.15/1.5+8*')
  expect(pushOperator('0.85-2-', '/', '1')).toBe('0.85-2-1/')
})
