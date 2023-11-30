import React, { useState } from "react";
import "./style.css";
import { number } from "../../service/data";

function Calculator() {
  const [num, setNum] = useState("");
  const [sign, setSign] = useState(false);

  const handleEnterNum = (number) => {
    setNum((prevNum) => prevNum + number);
    setSign(false);
  };

  const handleAddSign = (item) => {
    if (sign === true) {
      setNum((prevNum) => prevNum.slice(0, -1) + item);
    } else {
      setSign(true);
      setNum((prevNum) => prevNum + item);
    }
  };

  const handleCalculate = () => {
    try {
      const result = eval(num);
      setSign("");
      setNum(result.toString());
    } catch (error) {}
  };
  return (
    <div className="calculator">
      <div className="display">
        <h2 style={{ margin: "10px" }}>{num}</h2>
      </div>
      <div className="insert">
        <div className="other-buttons">
          <button style={{ borderRadius: "2%", color: "black" }} disabled>
            <i className="fa-solid fa-paw"></i>
          </button>
          <button
            style={{ background: "#282c34" }}
            onClick={() => {
              setNum((prevNum) => prevNum.slice(0, -1));
              setSign(false);
            }}
          >
            DEL
          </button>
          <button
            style={{ borderRadius: "20%", backgroundColor: "orange" }}
            onClick={() => {
              setNum("");
              setSign(false);
            }}
          >
            AC
          </button>
        </div>
        <div className="number-container">
          <button
            style={{ background: "black" }}
            onClick={() => handleAddSign("+")}
          >
            +
          </button>
          <button
            style={{ background: "black" }}
            onClick={() => handleAddSign("-")}
          >
            -
          </button>
          <button
            style={{ background: "black" }}
            onClick={() => handleAddSign("*")}
          >
            x
          </button>
          <button
            style={{ background: "black" }}
            onClick={() => handleAddSign("/")}
          >
            :
          </button>
          {number.map((item) => (
            <button
              className="number"
              key={item.id}
              onClick={() => handleEnterNum(item.number)}
            >
              {item.number}
            </button>
          ))}
          <button
            style={{ background: "black" }}
            onClick={() => handleEnterNum(".")}
          >
            .
          </button>
          <button
            style={{ background: "black" }}
            onClick={() => handleCalculate()}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
