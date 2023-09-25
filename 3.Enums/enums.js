function performArithmeticOperation(num1, num2, type) {
    console.log(type);
}
performArithmeticOperation(3, 7, "mul");
// With ENUM
var ArithmeticOperationEnum;
(function (ArithmeticOperationEnum) {
    ArithmeticOperationEnum[ArithmeticOperationEnum["Add"] = 0] = "Add";
    ArithmeticOperationEnum[ArithmeticOperationEnum["Sub"] = 1] = "Sub";
    ArithmeticOperationEnum[ArithmeticOperationEnum["Mul"] = 2] = "Mul";
    ArithmeticOperationEnum[ArithmeticOperationEnum["Div"] = 3] = "Div";
})(ArithmeticOperationEnum || (ArithmeticOperationEnum = {}));
function performArithmeticOperationUsingEnum(num1, num2, type) {
    console.log(type);
}
performArithmeticOperationUsingEnum(4, 89, ArithmeticOperationEnum.Div);
