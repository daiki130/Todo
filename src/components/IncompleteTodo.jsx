export const IncompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div>
      <p>未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
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
  );
};
