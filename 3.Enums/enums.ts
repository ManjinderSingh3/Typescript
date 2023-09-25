// Without ENUM
type ArithmeticOperation = "add" | "sub" | "mul" | "div";
function performArithmeticOperation(
  num1: number,
  num2: number,
  type: ArithmeticOperation
) {
  console.log(type);
}
performArithmeticOperation(3, 7, "mul");

// With ENUM

enum ArithmeticOperationEnum {
  Add,
  Sub,
  Mul,
  Div,
}

function performArithmeticOperationUsingEnum(
  num1: number,
  num2: number,
  type: ArithmeticOperationEnum
) {
  console.log(type);
}

performArithmeticOperationUsingEnum(4, 89, ArithmeticOperationEnum.Div);
