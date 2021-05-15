export const CompleteTodo = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div>
      <p>完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={index}>
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
