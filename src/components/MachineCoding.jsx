import React, { useEffect, useState } from "react";
import CodingTaskForm from "./CodingTaskForm";

const MachineCoding = ({codingQuestions, setcodingQuestions}) => {
  const [isTaskEditing, setIsTaskEditing] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);






  const onSave = (taskData) => {
    if(isTaskEditing){
      setcodingQuestions((prev)=>(
        prev.map((t) => t.id === isTaskEditing.id ? {...t, ...taskData }: t )
      ))
      setIsTaskEditing(false)
    }else{
      setcodingQuestions((prev) => [...prev, { id: Date.now(), ...taskData }]);
    }
  };

  useEffect(() => {
    localStorage.setItem("codingQuestions", JSON.stringify(codingQuestions));
  }, [codingQuestions]);

  const onClose = () => {
    setShowTaskForm(false);
    setIsTaskEditing(false)
  };

  const handleEdit = (task)=>{
    setIsTaskEditing(task)
  }

  const handleDelete = (id)=>{    
    setcodingQuestions(codingQuestions.filter((task)=>(task.id !== id)))
  }



  return (
    <div className="bg-gray-100 px-8">
      <div className="flex justify-between   ">
        <h2 className="text-2xl font-semibold ">Machine Coding Tasks</h2>
        <button
          onClick={() => {
            setShowTaskForm(true);
          }}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5  rounded-lg transition"
        >
          Add Task
        </button>
      </div>

      <div className="bg-white rounded-xl relative shadow-sm  mt-3">
        {showTaskForm && (
          <CodingTaskForm
            onSave={onSave}
            isTaskEditing={isTaskEditing}
            setIsTaskEditing={setIsTaskEditing}
            showTaskForm={showTaskForm}
            setShowTaskForm={setShowTaskForm}
            onClose={onClose}
          />
        )}
      </div>

      <div className="bg-white rounded-xl relative shadow-sm  mt-3">
        <h1 className="text-2xl font-semibold p-2  ">Coding Tasks</h1>

        <table className="w-full items-center justify-center">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-6 py-4">Tasks</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {codingQuestions.map((task) => {
              return <tr key={task.id}>
                <td className="px-6 py-4">{task.task}</td>
                <td className="px-6 py-4"> {task.status}</td>
                <td className="px-6 py-4 space-x-3">
                <button onClick={()=>{handleEdit(task)
                  setShowTaskForm(true)
                }}  className="text-blue-600 hover:underline">
                  Edit
                </button>

                <button onClick={()=>{handleDelete(task.id)}} className="text-red-600 hover:underline">
                  Delete
                </button>
              </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MachineCoding;
