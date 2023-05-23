import React, { useState } from "react";
import logo from "../src/Assests/1024px-Microsoft_To-Do_icon.png";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    console.log("clicked");
    if (!inputData) {
      alert("please enter the task details");
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, myNewInputData]);
      //   console.log("else", inputData);
      console.log("items", items);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((currElem) => {
      return currElem.id !== index;
    });
    setItems(updatedItems);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col items-center text-white space-y-5">
        <img className="w-28" src={logo} alt="" />
        <h1>Add your list here ✌️</h1>
        <div className="flex items-center justify-between bg-white px-2 w-[130%]">
          <input
            className="py-2 text-black outline-none placeholder:text-sm"
            type="text"
            placeholder="✍️ Add task..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <AddIcon
            onClick={addItem}
            className="cursor-pointer"
            style={{ color: "black" }}
          />
        </div>
        {items.map((currElem, index) => {
          return (
            <div
              className="flex justify-between items-center w-[130%] px-2 py-2 bg-blue-800"
              key={index}
            >
              <div>{currElem.name}</div>
              <div className="space-x-2">
                <EditIcon fontSize="small" />
                <DeleteIcon
                  onClick={() => deleteItem(currElem.id)}
                  fontSize="small"
                />
              </div>
            </div>
          );
        })}
        {/* show the task */}

        <button className="bg-gray-500 px-3 py-1 rounded-lg">Remove all</button>
      </div>
    </div>
  );
};

export default Todo;
