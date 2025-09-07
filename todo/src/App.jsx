import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [todo,setTodo]=useState([]);

  const handleSubmit = () =>{
    if(title.trim() && description.trim()){
      const newTask = { name: title, desc: description };
      setTodo([...todo, newTask]);
      settitle("");
      setdescription("");
      console.log(todo);
    }
  }
  return (
    <>
      <div className="main-container container">
        <div className="input-conatiner d-flex flex-column align-items-center justify-content-center mt-2">
          <input
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className=" text-uppercase w-100 mb-2 p-2 rounded-2"
            type="text"
            placeholder="Enter Task"
          />
          <input
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className="w-100 mb-2 p-2 rounded-2"
            type="text"
            placeholder="Enter Task Description"
          />
          <button
            onClick={handleSubmit}
            className="bg-primary text-white fw-bold px-3 py-1 fs-6 border rounded-2 shadow "
          >
            Submit
          </button>
        </div>

        <div className="task-container">

       <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
          <button>Ongoing</button>
          <button>Completed</button>
          <button>Deleted</button>
        </div>

          <div className="row p-0">
            {todo.length > 0
              ? todo.map((elements, index) => (
                  <div key={index} className="col-4 col-md-6 col-lg-4 p-2">
                    <div className="task-card border-1 border border-dark-subtle p-2">
                      <p className="fs-4 fw-semibold ">{elements.name}</p>
                      <p>
                        {elements.desc}
                      </p>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <button>Complete</button>
                        <button>Delete</button>
                      </div>
                    </div>
                  </div>
                ))
              : "No Tasks"}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
