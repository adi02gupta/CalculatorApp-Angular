import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  currentNumber = '0';
  firstOperand:number = 0;
  operator: string = "";
  isSecondOperandExists: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  //This is called When any number key(0-9) is pressed.
  public getNumber(input: string){
    if(this.isSecondOperandExists)
    {
      this.currentNumber = input;
      this.isSecondOperandExists = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = input: this.currentNumber += input;

    }
  }

  // If a period(.) button is pressed, this method re-evaluates the current operand.
  public getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }

  // This method gets called when an operand like =,-,*,/ is pressed
  public getOperation(op: string){
    // Sets the first operand 
    if(this.firstOperand === 0){
      this.firstOperand = Number(this.currentNumber);
    }
    // Goes into this loop when there is a value for operand. 
    else if(this.operator){
      // Perform calculation operations.
      const result = this.calculate(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      if(result !== undefined)
      this.firstOperand = result;
    }
    this.operator = op;
    this.isSecondOperandExists = true;
  }

  // Resets all calculations.
  public reset(){
    this.currentNumber = '0';
    this.firstOperand = 0;
    this.operator = "";
    this.isSecondOperandExists = false;
  }

  // This method performs calculation and returns the result.
  private calculate(op: any , secondOp: number){
    switch (op){
      case '+':
      return this.firstOperand += secondOp; 
      case '-': 
      return this.firstOperand -= secondOp; 
      case '*': 
      return this.firstOperand *= secondOp; 
      case '/': 
      return this.firstOperand /= secondOp; 
      case '=':
      return secondOp;
      default:
        return 0;
    }
  }

}
