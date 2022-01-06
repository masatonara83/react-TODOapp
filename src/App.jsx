import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleateTodos, setIncompleateTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [compleateTodos, setCompleateTodos] = useState(["うううう"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incompleate-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleateTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
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
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
