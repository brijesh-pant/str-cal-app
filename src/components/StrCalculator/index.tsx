import "./index.css";
import React from "react";

const StringCalculator: React.FC = () => {
  return (
    <div className="main-container" data-testid="str-calculator">
      <div className="calculator-container">
        <h1 className="title">String Calculator</h1>
      </div>
    </div>
  );
};

export default StringCalculator;
