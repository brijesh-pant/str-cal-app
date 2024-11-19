import "./index.css";
import React, { useState } from "react";
import unescape from "unescape-js";
import strCalculator from "../../utils";

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  // Handle Calculate Button Click
  const handleCalculate = () => {
    try {
      setError("");
      const numbers = unescape(input);
      const calculationResult = strCalculator(numbers);
      setResult(calculationResult);
    } catch (error: any) {
      setResult(null);
      setError(error.message);
    }
  };
  return (
    <div className="main-container" data-testid="str-calculator">
      <div className="calculator-container">
        <h1 className="title">String Calculator</h1>
        <input
          type="text"
          placeholder="Enter numbers (e.g., 1,2,3)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input-box"
        />
        <button onClick={handleCalculate} className="calculate-button">
          Calculate
        </button>
        {result !== null && <div className="result-box">Result: {result}</div>}
        {error && <div className="error-box">{error}</div>}
      </div>
    </div>
  );
};

export default StringCalculator;
