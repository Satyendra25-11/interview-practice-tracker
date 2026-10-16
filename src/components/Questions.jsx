import { Search, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import AddQuestion from "./AddQuestion";

const Questions = ({setTotalQuestions, setDsaQuestions, setInterviewQuestions, setMachineCoding}) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("")
  const [status, setStatus] = useState("");
  const [editing, setEditing] = useState(false)




  const [questions, setQuestions] = useState(()=>{
    const saved = localStorage.getItem("questions")
    return saved ? JSON.parse(saved) : []
  } )
  const [showForm, setShowForm] = useState(false)

  const onSave = (questionData)=>{

    if(editing){
      setQuestions((prev)=>
        prev.map((q)=> q.id === editing.id ?  {...q, ...questionData}: q)
      )
    }else{
      setQuestions((prev) => [
      ...prev, {
        id: Date.now(),
        ...questionData,
      },
    ]);
    }

    
    setShowForm(false)
  }

  useEffect(()=>{
    localStorage.setItem("questions",JSON.stringify(questions))
  },[questions])


  const handleDelete = (id)=>{
    setQuestions(questions.filter(question => question.id !== id));
  }

  const handleEdit = (question)=>{
    setEditing(question)
  }







const filteredQuestions = questions.filter((q)=> {
  const matchSearch = q.title?.toLowerCase().includes(search.toLowerCase())

  const matchLevel = difficulty === "" || q.difficulty === difficulty
  const matchCategory = category === "" || q.category === category
  const matchStatus = status === "" || q.status === status

  return matchSearch && matchLevel && matchCategory && matchStatus

}
)




  return (
    <div className="relative">
      <div className="min-h-screen  bg-gray-100 p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Questions
        </h1>

        <button onClick={()=>setShowForm(true)} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg transition">
          <Plus size={18} />
          Add Question
        </button>

      </div>

    <div>
          {showForm && (
          <AddQuestion onSave = {onSave} 
          onClose= {()=>{setShowForm(false)
            setEditing(null)
          }} editing = {editing} />
          )
        }
        </div>



      {/* Filters */}

      <div className="bg-white rounded-xl shadow-sm p-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* Search */}

          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search question..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-lg pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>  



          {/* Category */}

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Categories</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="DSA">DSA</option>
            <option value="Git">Git</option>
          </select>





          {/* Difficulty */}

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="border rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Levels</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>



          

          {/* Status */}

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>

        </div>

      </div>

      {/* Questions Table Placeholder */}

      <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-50">
            <tr className="text-left">

              <th className="px-6 py-4">Question</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Difficulty</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>

            </tr>
          </thead>

          <tbody>

            {
              filteredQuestions.map((question)=>(
                <tr key={question.id} className="border-t">

              <td className="px-6 py-4">
                {question.title}
              </td>

              <td className="px-6 py-4">
                {question.category}
              </td>

              <td className="px-6 py-4">
                {question.difficulty}
              </td>

              <td className="px-6 py-4">
                <span className={`${question.status === "completed"? "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm" :"bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"}`}>
                  {question.status}
                </span>
              </td>

              <td className="px-6 py-4 space-x-3">
                <button onClick={()=>{handleEdit(question)
                  setShowForm(true)
                }}  className="text-blue-600 hover:underline">
                  Edit
                </button>

                <button onClick={()=>{handleDelete(question.id)}} className="text-red-600 hover:underline">
                  Delete
                </button>
              </td>

            </tr>
              ))
            }

          </tbody>

        </table>

      </div>

    </div>
    </div>
  );
};

export default Questions;