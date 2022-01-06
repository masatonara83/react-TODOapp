import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleateTodos } from "./components/IncompleateTodos";
import { CompleateTodos } from "./components/CompleateTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleateTodos, setIncompleateTodos] = useState([]);
  const [compleateTodos, setCompleateTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleateTodos, todoText];
    setIncompleateTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleateTodos];
    newTodos.splice(index, 1);
    setIncompleateTodos(newTodos);
  };

  const onClickCompleate = (index) => {
    const newIncompleateTodos = [...incompleateTodos];
    newIncompleateTodos.splice(index, 1);

    const newCompleateTodos = [...compleateTodos, incompleateTodos[index]];
    setIncompleateTodos(newIncompleateTodos);
    setCompleateTodos(newCompleateTodos);
  };

  const onClickBack = (index) => {
    const newCompleateTodos = [...compleateTodos];
    newCompleateTodos.splice(index, 1);

    const newIncompleateTodos = [...incompleateTodos, compleateTodos[index]];
    setCompleateTodos(newCompleateTodos);
    setIncompleateTodos(newIncompleateTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleateTodos.length >= 5}
      />
      {incompleateTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodo5個まで</p>
      )}
      <IncompleateTodos
        todos={incompleateTodos}
        onClickCompleate={onClickCompleate}
        onClickDelete={onClickDelete}
      />
      <CompleateTodos todos={compleateTodos} onClickBack={onClickBack} />
    </>
  );
};
