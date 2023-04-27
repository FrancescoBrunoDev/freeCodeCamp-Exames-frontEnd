import React, { FC } from "react";
import "./CalculatorKey.scss";

interface ICalculatorKeyProps {
  keyValue: string | number;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export const CalculatorKey: FC<ICalculatorKeyProps> = ({
  onClick,
  className,
  keyValue,
  disabled,
}) => {
  let idValue = "";

  switch (keyValue) {
    case "1":
      idValue = "one";
      break;
    case "2":
      idValue = "two";
      break;
    case "3":
      idValue = "three";
      break;
    case "4":
      idValue = "four";
      break;
    case "5":
      idValue = "five";
      break;
    case "6":
      idValue = "six";
      break;
    case "7":
      idValue = "seven";
      break;
    case "8":
      idValue = "eight";
      break;
    case "9":
      idValue = "nine";
      break;
    case "0":
      idValue = "zero";
      break;
    case "+":
      idValue = "add";
      break;
    case "-":
      idValue = "subtract";
      break;
    case "x":
      idValue = "multiply";
      break;
    case "÷":
      idValue = "divide";
      break;
    default:
      idValue = "";
      break;
  }

  switch (className){
    case "key-clear":
      idValue = "clear";
      break;
    case "key-dot":
      idValue = "decimal";
      break;
    case "key-equals":
      idValue = "equals";
      break;
  }

  return (
    <button
      id={idValue}
      className={`calculator-key ${className}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
      data-testid="calculator-key"
    >
      {keyValue}
    </button>
  );
};
