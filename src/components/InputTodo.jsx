const style = {
  backgroundColor: "#1cffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
};

export const InputTodo = (props) => {
  const { todoText, handleChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={handleChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
