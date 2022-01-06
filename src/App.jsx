import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleateTodos, setIncompleateTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [compleateTodos, setCompleateTodos] = useState(["うううう"]);
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

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incompleate-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleateTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickCompleate(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="compleate-area">
        <p className="title">完了のTODO</p>
        <ul>
          {compleateTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
