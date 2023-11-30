import React, { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { itemsList } from "../../service/data";
import "./style.css";

function ToDoList() {
  const [text, setText] = useState("");
  const [list, setList] = useState(itemsList);
  const [editId, setEditId] = useState("");
  const [editText, setEditText] = useState("");

  const handleAdd = () => {
    const newLists = { id: list.length, text };
    newLists.id++;
    setList((prevList) => [newLists, ...prevList]);
    setText("");
  };

  const handleEdit = (currentId, currentText) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === currentId ? { ...item, text: currentText } : item
      )
    );
    setEditId("");
  };

  const handleDelete = (currentId) => {
    setList((prevList) => prevList.filter((list) => list.id !== currentId));
  };

  return (
    <div>
      <div className="todo">
        <h1>To Do List</h1>
        <InputGroup className="mb-3">
          <Form.Control
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter todo list"
          />

          <Button variant="success" onClick={() => handleAdd()}>
            <i className="fa-solid fa-circle-plus"></i>
          </Button>
        </InputGroup>
        <div className="list-items">
          {list ? (
            list.map((item) => (
              <>
                <tr>
                  <td style={{ wordBreak: "break-word" }}>{item.text}</td>
                  <td>
                    <Button
                      onClick={() => {
                        setEditId(item.id);
                        setEditText(item.text);
                      }}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i className="fa-solid fa-delete-left"></i>
                    </Button>
                  </td>
                </tr>
              </>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>

      <Modal show={editId} onHide={() => setEditId("")}>
        <Modal.Header closeButton>Edit to do list</Modal.Header>
        <Modal.Body>
          <Form.Control
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => handleEdit(editId, editText)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ToDoList;
