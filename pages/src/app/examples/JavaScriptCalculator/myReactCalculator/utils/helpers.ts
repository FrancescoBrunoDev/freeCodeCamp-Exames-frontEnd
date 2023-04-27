import { Digits, CalculatorOperations } from '../types';

export const digitKeys: Digits[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

export const calculatorOperations: CalculatorOperations = {
  '/': {
    name: 'divide',
    symbol: '÷',
    show: true,
    func: (prevValue: number, nextValue: number) => prevValue / nextValue,
  },
  '*': {
    name: 'multiply',
    symbol: 'x',
    show: true,
    func: (prevValue: number, nextValue: number) => prevValue * nextValue,
  },
  '-': {
    name: 'subtract',
    symbol: '-',
    show: true,
    func: (prevValue: number, nextValue: number) => prevValue - nextValue,
  },
  '+': {
    name: 'add',
    symbol: '+',
    show: true,
    func: (prevValue: number, nextValue: number) => prevValue + nextValue,
  },
  '=': {
    name: 'equals',
    symbol: '=',
    show: true,
    func: (_prevValue: number, nextValue: number) => nextValue,
  },
  'Enter': {
    name: 'enter',
    symbol: '=',
    show: false,
    func: (_prevValue: number, nextValue: number) => nextValue,
  },
};

export const getFormattedValue = (value: string): string => {
  let formattedValue = value;
  return formattedValue;
};
