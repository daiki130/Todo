import { useCallback, useState } from "react";
import "./App.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplaeteTodos, setIncomplaeteTodos] = useState([]);
  const [complaeteTodos, setComplaeteTodos] = useState([]);

  const handleChange = useCallback((e) => {
    setTodoText(e.target.value);
  }, []);

  // 追加ボタンの処理
  const onClickAdd = () => {
    if (todoText === "") {
      return;
    }
    const newTodos = [...incomplaeteTodos, todoText];
    setIncomplaeteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタンの処理
  const onClickDelete = (index) => {
    const newTodos = [...incomplaeteTodos];
    newTodos.splice(index, 1);
    setIncomplaeteTodos(newTodos);
  };

  // 完了ボタンの処理
  const onClickComplete = (index) => {
    const newInCompleteTodos = [...incomplaeteTodos];
    newInCompleteTodos.splice(index, 1);
    const newCompleteTodos = [incomplaeteTodos[index], ...complaeteTodos];
    setIncomplaeteTodos(newInCompleteTodos);
    setComplaeteTodos(newCompleteTodos);
  };

  // 戻すボタンの処理
  const onClickBack = (index) => {
    const newCompleteTodos = [...complaeteTodos];
    newCompleteTodos.splice(index, 1);
    const newInCompleteTodos = [...incomplaeteTodos, complaeteTodos[index]];
    setIncomplaeteTodos(newInCompleteTodos);
    setComplaeteTodos(newCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={handleChange}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          {incomplaeteTodos.map((todo, index) => {
            return (
              <div key={index}>
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          {complaeteTodos.map((todo, index) => {
            return (
              <div key={index}>
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div></div>
    </>
  );
};
