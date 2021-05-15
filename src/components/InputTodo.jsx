const style = {
  backgroundColor: "#1cffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
};

export const InputTodo = (props) => {
  const { todoText, handleChange, onClick } = props;
  return (
    <div style={style}>
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={handleChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
