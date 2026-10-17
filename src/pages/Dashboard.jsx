import {
  BookOpen,
  Code2,
  Brain,
  Laptop2,
  PlayCircle,
  ChevronRight,
} from "lucide-react";
import { useEffect } from "react";

const Dashboard = ({totalQuestions, dsaQuestions, completedDsa, interviewQuestions, completedInterview, machineCoding, codingQuestions}) => {
  
  const totalCoding = codingQuestions.length
  const completeCoding = codingQuestions.filter((t)=>{
    return t.status === "completed"
  }).length

  
  
  
   const dsaPercent = Math.floor((completedDsa / dsaQuestions)*100 || 0)
  const interviewPercent = Math.floor((completedInterview / interviewQuestions)*100 || 0)
  const codingPercent = Math.floor((totalCoding / completeCoding)*100 || 0)







  
  return (
    <div className="h-auto bg-gray-100 p-8">

      {/* Welcome */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Dashboard 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Track your interview preparation and stay consistent.
        </p>
      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        

        <div className="bg-white rounded-xl flex items-center justify-between shadow-sm py-2 px-5">
          <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center bg-blue-100 text-blue-600`}
            >
              <BookOpen size={30} />
            </div>

           <div>
             <p className="text-gray-800 mt-5">
              Total Questions
            </p>

            <h2 className="text-3xl font-bold mt-1">
              {totalQuestions}
            </h2>
           </div>
        </div>


        <div className="bg-white rounded-xl flex items-center justify-between shadow-sm py-2 px-5">
          <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center bg-green-100 text-green-600`}
            >
              <Brain size={30} />
            </div>

           <div>
             <p className="text-gray-800 mt-5">
              Completed DSA
            </p>

            <h2 className="text-3xl font-bold mt-1">
              {completedDsa}/{dsaQuestions}
            </h2>
           </div>
        </div>


         <div className="bg-white rounded-xl flex items-center justify-between shadow-sm py-2 px-5">
          <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center bg-purple-100 text-purple-600`}
            >
              <Code2 size={30} />
            </div>

           <div>
             <p className="text-gray-800 mt-5">
              Interview Questions
            </p>

            <h2 className="text-3xl font-bold mt-1">
              {completedInterview}/{interviewQuestions}
            </h2>
           </div>
        </div>


        <div className="bg-white rounded-xl flex items-center justify-between shadow-sm py-2 px-5">
          <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center bg-orange-100 text-orange-600`}
            >
              <Laptop2 size={30} />
            </div>

           <div>
             <p className="text-gray-800 font-semibold mt-5">
              Machine Coding Tasks
            </p>

            <h2 className="text-3xl font-bold mt-1">
              {completeCoding} / {totalCoding}
            </h2>
           </div>
        </div>








      </div>

      {/* Progress */}

      <div className="bg-white rounded-xl  shadow-sm p-6 mt-8">

        <h2 className="text-2xl font-semibold mb-3">
          Progress Overview
        </h2>

        <div className="flex justify-between gap-7 w-full">
            {[
          { title: "DSA", value: dsaPercent},
          { title: "Interview Questions", value: interviewPercent },
          { title: "Machine Coding", value: codingPercent },
        ].map((item) => (
          <div key={item.title} className="mb-1 bg-gray-100 p-4 w-full rounded-2xl flex flex-col ">

            <div className="flex justify-between mb-2">
              <span>{item.title}</span>
              <span>{item.value}%</span>
            </div>

            <div className="w-full bg-gray-200 h-3 flex  rounded-full">

              <div
                className="bg-indigo-600 h-3  rounded-full"
                style={{
                  width: `${item.value}%`,
                }}
              />

            </div>

          </div>
        ))}
        </div>

      </div>

      {/* Bottom Section */}

      <div className="grid lg:grid-cols-2 gap-8 mt-8">

       

      </div>

    </div>
  );
};

export default Dashboard;