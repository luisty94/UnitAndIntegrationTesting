import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add two numbers', () => {
    const button4 = container.getByTestId('number4');
    const addButton = container.getByTestId('operator-add')
    const button1 = container.getByTestId('number1');
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(addButton);
    fireEvent.click(button1);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract one number from another', () => {
    const button7 = container.getByTestId('number7');
    const subtractButton = container.getByTestId('operator-subtract')
    const button4 = container.getByTestId('number4');
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(subtractButton);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  })
  
  it('should multiply two numbers', () => {
    const button3 = container.getByTestId('number3');
    const multiplyButton = container.getByTestId('operator-multiply')
    const button5 = container.getByTestId('number5');
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiplyButton);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide one number by another', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const divideButton = container.getByTestId('operator-divide')
    const button7 = container.getByTestId('number7');
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should concatenate multiple number clicks', () => {
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual('17');
  })
  
  it('should chain multiple operations', () => {
    const button5 = container.getByTestId('number5');
    const button8 = container.getByTestId('number8');
    const button0 = container.getByTestId('number0');
    const divide = container.getByTestId('operator-divide');
    const button2 = container.getByTestId('number2');
    const addButton = container.getByTestId('operator-add');
    const runningTotal = container.getByTestId('running-total');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button8);
    fireEvent.click(button0);
    fireEvent.click(divide);
    fireEvent.click(button2);
    fireEvent.click(addButton);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('45');
  })

  it('should be able to clear the running total without affecting the calculation', () => {
    const button9 = container.getByTestId('number9');
    const subtractButton = container.getByTestId('operator-subtract');
    const button1 = container.getByTestId('number1');
    const equals = container.getByTestId('operator-equals');
    const clear = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button9);
    fireEvent.click(subtractButton);
    fireEvent.click(button1);
    fireEvent.click(equals);
    fireEvent.click(clear);
    fireEvent.click(subtractButton);
    fireEvent.click(button1);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('7');
  })
})

