import React, { useEffect, useState } from 'react'

const CodingTaskForm = ({onSave, isTaskEditing, setIsTaskEditing, showTaskForm, setShowTaskForm, onClose}) => {

    const [formData, setFormData] = useState({
        task:"",
        status:"pending"
    })

    useEffect(()=>{
      if(isTaskEditing){
      setFormData({
        task: isTaskEditing.task,
        status : isTaskEditing.status
      })
    }
    },[isTaskEditing])


    const handleChange = (e)=>{        
        setFormData((prev)=>({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }






    const handleSubmitTask = (e)=>{
        e.preventDefault()
       onSave(formData)
       setShowTaskForm(false)
       setFormData({
        task:"",
        status:"pending"
       })
        
    }






  return (
     <div className="min-h-screen w-full absolute bg-black/2 backdrop-blur-sm z-10  flex justify-center items-start p-8">
      <form
        onSubmit={handleSubmitTask}
        className="w-full max-w-3xl bg-white shadow rounded-xl p-8"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-8"> {isTaskEditing ? "Edit Question" : "Add New Question"} </h1>

        <button type='button' onClick={onClose} className="text-2xl">
          ✕
        </button>
        </div>

        {/* Question */}

        <div className="mb-5">
          <label className="block font-medium mb-2">Task</label>

          <textarea
            rows="4"
            name="task"
            value={formData.task}
            onChange={handleChange}
            placeholder="Write Machine coding Task..."
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

       

       
        {/* Status */}

        <div className="mb-5">
          <label className="block font-medium mb-2">Status</label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        

        <div className="flex justify-between">
          <button type='button' onClick={()=>onClose()} className=" text-black border border-2 px-6 py-3 rounded-lg">
          Cancel
        </button>
        
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg">
          {isTaskEditing ? "Update": "Save Question"}
        </button>
        </div>
      </form>
    </div>
  )
}

export default CodingTaskForm