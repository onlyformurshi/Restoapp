import React from 'react'
import './calculator.css'
import { useState } from 'react'
function Calculator() {

  const [Display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(Display + value)
  }

  const CalculateResult = () => {
    try {
      setDisplay(eval(Display))
    } catch (error) {
      setDisplay("Error")
    }
  }
  const ClearDisplay = () => {
    setDisplay("")
  }

  return (
    <div className="calu-body">
      <div className="calculator">
        <div className="display">{Display}</div>
        <div className="buttons">
          <button onClick={() => ClearDisplay()} className="clear">C</button>
          <button onClick={() => handleClick("/")} className="operator">÷</button>
          <button onClick={() => handleClick("*")} className="operator">×</button>
          <button onClick={() => handleClick("-")} className="operator">-</button>
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>
          <button onClick={() => handleClick("+")} className="operator">+</button>
          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(6)}>6</button>
          <button onClick={() => CalculateResult()} className="operator">=</button>
          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>
          <button onClick={() => handleClick(0)}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
