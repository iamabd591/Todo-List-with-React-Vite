import "./app.scss";
import { Fragment, useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { Add, Delete, Update } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { MdAddComment, MdDeleteForever, MdCancel } from "react-icons/md";

function App() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const todos = useSelector((state) => state.todos);
  const [originalValue, setOriginalValue] = useState("");

  const handleInputValue = (e) => {
    setTodo(e.target.value);
  };

  const handleEditClick = (index) => {
    setIsEdit(true);
    setEditIndex(index);
    setTodo(todos[index]);
    setOriginalValue(todos[index]);
  };

  const handleAdd = () => {
    if (!todo.trim()) {
      alert("Todo field cannot be empty");
      return;
    }
    dispatch(Add(todo, todos));
    setTodo("");
  };

  const handleDelete = (index) => {
    if (confirm("Do You Want To Delete This Task?")) {
      dispatch(Delete(index, todos));
    }
  };

  const handleUpdate = () => {
    if (!todo.trim()) {
      alert("Todo field cannot be empty");
      return;
    }
    dispatch(Update(editIndex, todo, todos));
    setIsEdit(false);
    setEditIndex(null);
    setTodo("");
  };
  const handleCancle = () => {
    setIsEdit(false);
    setTodo("");
    return;
  };

  return (
    <Fragment>
      <div className="wrapper">
        <div className="main">
          <h1>To Do List</h1>
          <div className="inputDiv">
            <input
              type="text"
              maxLength={40}
              value={todo}
              placeholder="Enter Your Task"
              className="todoInput"
              onChange={handleInputValue}
            />
            {todo && !isEdit && (
              <button id="btn" onClick={handleAdd}>
                Add Task{" "}
                <span>
                  <MdAddComment />
                </span>
              </button>
            )}

            {isEdit && (
              <button
                id="savebtn"
                className="savebtn"
                onClick={handleUpdate}
                disabled={todo === originalValue}
              >
                Save{" "}
                <span>
                  <FaSave />
                </span>
              </button>
            )}
            {isEdit && (
              <button id="savebtn" className="canclebtn" onClick={handleCancle}>
                Cancle{" "}
                <span>
                <MdCancel />
                </span>
              </button>
            )}
          </div>
          <div className="todoList">
            <ul>
              {todos.map((list, ind) => (
                <li key={ind}>
                  <div>
                    <p>{list}</p>
                    <button
                      id="editbtn"
                      className="edit"
                      onClick={() => handleEditClick(ind)}
                    >
                      Update
                      <span>
                        <FaEdit />{" "}
                      </span>
                    </button>
                    <button
                      className="delete"
                      onClick={() => handleDelete(ind)}
                    >
                      Delete
                      <span>
                        <MdDeleteForever />{" "}
                      </span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default App;
