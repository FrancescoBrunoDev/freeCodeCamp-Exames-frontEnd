"use client";

import React from "react";
import { Calculator } from "./myReactCalculator";

function CalculatorJS() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-5 bg-black shadow-lg rounded-lg">
        <Calculator />
      </div>
    </div>
  );
}

export default CalculatorJS;
