import { useEffect, useState } from "react";

const AddQuestion = ({ onClose, onSave, editing}) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    difficulty: "",
    status: "pending",
  });

  useEffect(()=>{
    if(editing){
      setFormData(editing)
    }
  },[editing])


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData)

    setFormData({
    title: "",
    category: "",
    difficulty: "",
    status: "pending",
    notes: "",
  })

    console.log(formData);

    // Later:
    // await axios.post("/api/questions", formData)
  };

  return (
    <div className="min-h-screen w-full absolute bg-black/2 backdrop-blur-sm z-10  flex justify-center items-start p-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white shadow rounded-xl p-8"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-8"> {editing ? "Edit Question" : "Add New Question"} </h1>

        <button onClick={onClose} className="text-2xl">
          ✕
        </button>
        </div>

        {/* Question */}

        <div className="mb-5">
          <label className="block font-medium mb-2">Question</label>

          <textarea
            rows="4"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Write interview question..."
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        {/* Category */}

        <div className="mb-5">
          <label className="block font-medium mb-2">Category</label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select Category</option>
            <option>DSA</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Git</option>
            
          </select>
        </div>

        {/* Difficulty */}

        <div className="mb-5">
          <label className="block font-medium mb-2">Difficulty</label>

          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select Difficulty</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
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

        {/* Notes */}

        {/* <div className="mb-8">
          <label className="block font-medium mb-2">Notes</label>

          <textarea
            rows="5"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Write your answer or notes..."
            className="w-full border rounded-lg p-3"
          />
        </div> */}

        <div className="flex justify-between">
          <button onClick={()=>onClose()} className=" text-black border border-2 px-6 py-3 rounded-lg">
          Cancel
        </button>
        
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg">
          {editing ? "Update": "Save Question"}
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddQuestion;
