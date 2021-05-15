import { useCallback, useState } from "react";
import "./App.css";

import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

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
      <InputTodo
        todoText={todoText}
        handleChange={handleChange}
        onClick={onClickAdd}
      />
      <IncompleteTodo
        todos={incomplaeteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo todos={complaeteTodos} onClickBack={onClickBack} />
      <div></div>
    </>
  );
};
