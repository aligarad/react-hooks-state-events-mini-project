import React from "react";
import React, { useCallback } from "react";

function Task() {
function Task({ text, category, onDelete }) {
  const handleDelete = useCallback(() => {
    onDelete(text);
  }, [onDelete, text]);
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}
}

export default Task
