import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  msg = 'Angular Calculator';
  current = '';
  previous = null;
  operator = null;
  operatorClicked = false;

  constructor() { }

  ngOnInit() {
  }

  clear = () => {
    this.current = '';
    this.previous = null;
    this.operator = null;
    this.operatorClicked = false;
  }

  negate = () => {
    this.current = this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`;
  }

  percentage = () => {
    this.current = `${parseFloat(this.current) / 100}`;
  }

  append = (keyPress) => {
    if (this.operatorClicked) {
      this.current = '';
      this.operatorClicked = false;
    }
    this.current = `${this.current}${keyPress}`;
  }

  appendZero = () => {
    if (parseFloat(this.current) !== 0) {
      this.append('0');
    }
  }

  addDecimal = () => {
    if (this.current.indexOf('.') === -1) {
      this.append('.');
    }
  }

  setPrevious = () => {
    this.previous = this.current;
    this.operatorClicked = true;
  }

  divide = () => {
    console.log('divide');
    this.operator = (a, b) => a / b;
    this.setPrevious();
  }

  multiply = () => {
    console.log('multiply');
    this.operator = (a, b) => a * b;
    this.setPrevious();
  }

  subtract = () => {
    console.log('subtract');
    this.operator = (a, b) => a - b;
    this.setPrevious();
  }

  add = () => {
    console.log('add');
    this.operator = (a, b) => a + b;
    this.setPrevious();
  }

  calculate = () => {
    if (this.operator !== null) {
      this.current = `${this.operator(parseFloat(this.previous), parseFloat(this.current))}`;
      this.operatorClicked = false;
      this.previous = null;
      this.operator = null;
    }
  }
}

