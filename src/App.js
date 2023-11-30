import "./App.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Calculator from "./components/Calculator";
import ToDoList from "./components/TodoList";
import TicTac from "./components/TicTac";
function App() {
  const [loading, setLoading] = useState(false);

  const [showCalculate, setShowCalculate] = useState(false);
  const [showTicTac, setShowTicTac] = useState(false);
  const [showToDo, setShowToDo] = useState(false);

  const handleShowCal = () => {
    setShowToDo(false);
    setLoading(true);
    setShowTicTac(false);
    setTimeout(() => {
      setLoading(false);
      setShowCalculate(true);
    }, 1500);
  };

  const handleShowToDO = () => {
    setShowCalculate(false);
    setShowTicTac(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowToDo(true);
    }, 1500);
  };

  const handleShowTic = () => {
    setLoading(true);
    setShowCalculate(false);
    setShowToDo(false);
    setTimeout(() => {
      setShowTicTac(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="App-header">
      <div className="welcome">
        <div className="content">
          <h1>
            Hello, My name is <span style={{ color: "yellow" }}>Khoa</span>
          </h1>
          <h2>This is my little work about ReactJs</h2>
          <Button onClick={() => handleShowTic()}>TicTac</Button>
          &nbsp;
          <Button onClick={() => handleShowCal()}>Calculator</Button>
          &nbsp;
          <Button onClick={() => handleShowToDO()}>To Do List</Button>
        </div>
      </div>
      <div className="App">
        {loading && <div className="circle"></div>}
        {showCalculate && <Calculator />}
        {showToDo && <ToDoList />}
        {showTicTac && <TicTac />}
      </div>
    </div>
  );
}

export default App;
