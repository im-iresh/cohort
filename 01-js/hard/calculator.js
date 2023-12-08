/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result=0;
  }
  add(n){
    this.result+=n;
  }
  subtract(n){
    this.result-=n;
  }
  multiply(n){
    this.result*=n;
  }
  divide(n){
    if(n!=0){
      this.result/=n;
    }
    else{
      throw new Error("Error Divide by zero")
    }
  }
  clear(){
    this.result=0;
  }
  getResult(){
    return this.result;
  }
  isdigit(n){
    if(n>='0'&&n<='9'){
      return true;
    }
    return false;
  }
  calcapply(a,b,op){
    // console.log(`recieved ${a} as a, ${b} as b, and ${op} as the operator`)
    if(op=='*'){
      return a*b;
    }
    if(op=='-'){
      return a-b;
    }
    if(op=='+'){
      return a+b;
    }
    if(op=='/'){
      if(b==0){
        throw new Error("Error Divide by zero")
      }
      return a/b;
    }
  }
  precedence(op){
    if(op=='-'||op=='+'){
      return 1;
    }
    if(op=='*' || op=='/'){
      return 2;
    }
    return 0;
  }
  checkBrackets(str){
    var stack=[];
    for(var i=0;i<str.length;i++){
      if(str[i]=='('){
        stack.push(str[i]);
      }
      else if(str[i]==')'){
        if(stack.length==0){
          throw new Error("Error Unbalaced Brackets")
          // throw new Error("Unbalanced parentheses in the input expression");
          // console.log("Error");
        }
        else{
          stack.pop();
        }
      }
    }
    if(stack.length>0){
      throw new Error("Error Unbalaced Brackets")
    }
  }
  calculate(str){
    // var temp =eval(str);
    // if(temp === Infinity){
    //   throw new Error("Error Invalid Expression")
    // }
    // return temp;
    str=str.replaceAll(' ','');
    for(i in str){
      if((str[i]>='a' && str[i]<='z') || (str[i]>='A' && str[i]<='Z')){
        throw new Error("Error Invalid Expression")
      }
    }
    this.checkBrackets(str);
    var value=[];
    var operator=[];
    for(var i=0;i<str.length;i++){
      if(this.isdigit(str[i])){// If digit pushing into values array
        var val = "";
        var flag=false;
        while(i<str.length && (this.isdigit(str[i]) || str[i]=='.')){
          if(str[i]=='.'){
            flag=true;
          }
          val =val +str[i];
          i++;
        }
        i--;
        value.push(flag?parseFloat(val):parseInt(val));
      }
      // try for further error control
      else if(str[i]==')'){// If right bracket then solving the inside of that bracket
          while(operator.slice(-1)!='('){
            var op =operator.pop();
            var b = value.pop();
            var a = value.pop();
            var v = this.calcapply(a,b,op);
            value.push(v);
          }
          if(operator.length) operator.pop();
      }
      else if(str[i]=='('){
        operator.push('(');
      }
      else{
        // console.log(`current symbol is ${str[i]} and the stack top is ${operator[operator.length-1]}`)
        while(operator.length && (this.precedence(operator.slice(-1))>=this.precedence(str[i]))){
            var op =operator.pop();
            var b = value.pop();
            var a = value.pop();
            var v = this.calcapply(a,b,op);
            value.push(v);
        }
        operator.push(str[i]);
      }
    }
    // console.log("Outside For Loop")
    while(operator.length && value.length>=2){
      var op =operator.pop();
      var b = value.pop();
      var a = value.pop();
      var v = this.calcapply(a,b,op);
      value.push(v);
    }
    if(value.length>1){
      throw new Error("Error Invalid Expression");
    }
    // return value[0];
    this.result = value[0];
  }
}

var c = new Calculator;
c.calculate("(2 + 3) * (6 - (4 + 1) / 2) + 7")
console.log(c.result);
// 10 +   2 *    (   6 - (4 + 1) / 2) + 7
module.exports = Calculator;


