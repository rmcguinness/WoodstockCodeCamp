

import { handleFunctions } from '../CalculatorLogic';
import { changeSign } from '../CalculatorLogic';
import { calculate } from '../CalculatorLogic';
import { pushOperator } from '../CalculatorLogic';
import { functions } from '../CalculatorFunctionData';

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

it('returns error string if divide by zero', () => {
  expect(calculate('1/0')).toBe('ERROR')
})

it('returns the evaluated equation', () => {
  expect(calculate('3*2-1')).toBe(5)
})

it('changes previously entered operator to last entered operator', () => {
  /*pushOperator takes two parameters -
    A string for equation,
    A string for equationValue, which is the clicked operator*/
  expect(pushOperator('2+3-', '+', '0')).toBe('2+3+')
  expect(pushOperator('2.5*', '/', '0')).toBe('2.5/')
  expect(pushOperator('0.75+3.55/', '-', '0')).toBe('0.75+3.55-')
})

it('adds an operator to equation', () => {
  /*pushOperator takes two parameters -
    A string for equation,
    A string for equationValue, which is the clicked operator */
  expect(pushOperator('4-2', '/')).toBe('4-2/')
  expect(pushOperator('3.15/1.5', '+')).toBe('3.15/1.5+')
  expect(pushOperator('0.85-2', '-')).toBe('0.85-2-')
})

//checks switch statement for AC click
it('checks AC function click', () => {
  let display = '70-12'
  const setDisplay = (val) => { display = val }
  let equation = ''
  const setEquation = (val) => { equation = val }

  handleFunctions(functions[0], display, setDisplay, equation, setEquation);

  expect(equation).toBe('')
  expect(display).toBe('0')
})

//checks switch statement for pos_neg click changing positive to negative
it('checks positive to negative function click', () => {
  let display = '44'
  const setDisplay = (val) => { display = val }

  let equation = '';
  const setEquation = (val) => { equation = val }

  handleFunctions(functions[1], display, setDisplay, equation, setEquation)

  expect(display).toBe('-44')
  expect(equation).toBe('-44')
})

//checks switch statement for pos_neg click, changing from negative to positive
it('checks negative to positive function click', () => {
  let display = '-15'
  const setDisplay = (val) => { display = val }

  let equation = ''
  const setEquation = (val) => { equation = val }

  handleFunctions(functions[1], display, setDisplay, equation, setEquation)

  expect(display).toBe('15')
  expect(equation).toBe('15')
})

//checks switch statement for equals click to evaluate an equation
it('checks equals function click', () => {
  let display = ''
  const setDisplay = (val) => { display = val }

  let equation = '9*10'
  const setEquation = (val) => { equation = val }

  handleFunctions(functions[6], display, setDisplay, equation, setEquation)

  expect(display).toBe(90)
})

it('checks equals function click with negatives', () => {
  let display = ''
  const setDisplay = (val) => { display = val }

  let equation = '87+-5*9'
  const setEquation = (val) => { equation = val }

  handleFunctions(functions[6], display, setDisplay, equation, setEquation)

  expect(display).toBe(42)
})