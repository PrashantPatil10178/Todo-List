import React from "react";
import "./App.css";

export default function List({ t }) {
  return (
    <div className="list">
      {todos.length > 0
        ? todos.map((t) => (
            <div key={t._id} className="task">
              <div className="checkbox" onClick={() => handleEdit(t._id)}>
                {t.done ? (
                  <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
                ) : (
                  <BsCircleFill className="icon" />
                )}
                <p className={t.done ? "line_through" : ""}>{t.task}</p>
              </div>
              <div>
                <span>
                  <BsFillTrashFill
                    className="icon"
                    onClick={() => {
                      handleDelete(t._id);
                    }}
                  />
                </span>
              </div>
            </div>
          ))
        : "No Record"}
    </div>
  );
}
