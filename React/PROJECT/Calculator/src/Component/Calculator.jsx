import { useState } from "react";

function Calculator() {
  const [val, setVal] = useState("0");

  const operators = ["+", "-", "*", "/", "%", "."];

  function btnClickHandler(e) {
    const enteredValue = e.target.innerText;
    const lastChar = val[val.length - 1];

    if (val === "0" && operators.includes(enteredValue)) return;

    if (val === "0" && enteredValue === "00") return;

    if (
      operators.includes(lastChar) &&
      operators.includes(enteredValue) &&
      lastChar === enteredValue
    ) {
      return;
    }

    if (
      operators.includes(lastChar) &&
      operators.includes(enteredValue) &&
      lastChar !== enteredValue
    ) {
      setVal(val.slice(0, -1) + enteredValue);
      return;
    }

    if (enteredValue === ".") {
      const currentNumber = val.split(/[+\-*/%]/).pop();

      if (currentNumber.includes(".")) {
        return;
      }
    }

    if (val === "0") {
      setVal(enteredValue);
    } else {
      setVal(val + enteredValue);
    }
  }

  function handleBackspace() {
    if (val.length === 1) {
      setVal("0");
    } else {
      setVal(val.slice(0, -1));
    }
  }

  function calculateResult() {
    try {
      const lastChar = val[val.length - 1];

      if (operators.includes(lastChar)) {
        setVal("Invalid Expression");
        return;
      }

      const answer = eval(val);
      setVal(String(answer));
    } catch {
      setVal("Error");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 flex items-center justify-center p-5">

      <div className="w-[390px] bg-black rounded-[40px] p-6 border border-zinc-700 shadow-[0_0_35px_rgba(255,255,255,0.08)]">


        <div className="h-36 flex items-end justify-end mb-8 px-2 overflow-hidden">
          <h1 className="text-white text-6xl font-light break-all">
            {val}
          </h1>
        </div>


        <div className="grid grid-cols-4 gap-4">

          <button
            className="btn-special"
            onClick={() => setVal("0")}
          >
            C
          </button>

          <button
            className="btn-special"
            onClick={btnClickHandler}
          >
            %
          </button>

          <button
            className="btn-special"
            onClick={handleBackspace}
          >
            ⌫
          </button>

          <button
            className="btn-operator"
            onClick={btnClickHandler}
          >
            /
          </button>

          <button className="btn-number" onClick={btnClickHandler}>
            7
          </button>

          <button className="btn-number" onClick={btnClickHandler}>
            8
          </button>

          <button className="btn-number" onClick={btnClickHandler}>
            9
          </button>

          <button className="btn-operator" onClick={btnClickHandler}>
            *
          </button>

          <button className="btn-number" onClick={btnClickHandler}>
            4
          </button>

          <button className="btn-number" onClick={btnClickHandler}>
            5
          </button>

          <button className="btn-number" onClick={btnClickHandler}>
            6
          </button>

          <button className="btn-operator" onClick={btnClickHandler}>
            -
          </button>

          <button className="btn-number" onClick={btnClickHandler}>
            1
          </button>

          <button className="btn-number" onClick={btnClickHandler}>
            2
          </button>

          <button className="btn-number" onClick={btnClickHandler}>
            3
          </button>

          <button className="btn-operator" onClick={btnClickHandler}>
            +
          </button>

          <button className="btn-number" onClick={btnClickHandler}>
            00
          </button>

          <button className="btn-number" onClick={btnClickHandler}>
            0
          </button>

          <button className="btn-number" onClick={btnClickHandler}>
            .
          </button>

          <button
            className="btn-equal"
            onClick={calculateResult}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;