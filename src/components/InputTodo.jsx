export const InputTodo = (props) => {
  const { todoText, handleChange, onClick } = props;
  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={handleChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
