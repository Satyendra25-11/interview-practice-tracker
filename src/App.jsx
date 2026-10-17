import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Questions from "./components/Questions";
import MachineCoding from "./components/MachineCoding";

const App = () => {
  // const questions = JSON.parse(localStorage.getItem("questions")) || [];

   const [questions, setQuestions] = useState(()=>{
    const saved = localStorage.getItem("questions")
    return saved ? JSON.parse(saved) : []
  } )

  const totalQuestions = questions.length

  const dsaQuestions = questions.filter((q) => q.category === "DSA")
  const interviewQuestions = questions.filter(
      (q) => q.category === "Frontend" || q.category === "Backend" || q.category === "Git",
    )

  const [machineCoding, setMachineCoding] = useState(0);


  const completedDsa = dsaQuestions.filter((q)=> q.status === "completed")
  const completedInterview = interviewQuestions.filter((q)=> q.status === "completed")
  const [codingQuestions, setcodingQuestions] = useState(JSON.parse(localStorage.getItem("codingQuestions")) || [])


  //   const [codingQuestions, setcodingQuestions] = useState(() => {
  //   const codingTasks = localStorage.getItem("codingQuestions");
  //   return codingTasks ? JSON.parse(codingTasks) : [];
  // });








  
  return (
    <div className="max-w-100vw">
      <Navbar />
      <Dashboard
        totalQuestions={totalQuestions}
        dsaQuestions={dsaQuestions.length}
        completedDsa={completedDsa.length}
        interviewQuestions={interviewQuestions.length}
        completedInterview={completedInterview.length}
        machineCoding={machineCoding}
        codingQuestions={codingQuestions}
      />
      <MachineCoding codingQuestions={codingQuestions} setcodingQuestions={setcodingQuestions}/>
      <Questions
        questions={questions}
        setQuestions={setQuestions}
        setMachineCoding={setMachineCoding}
      />
    </div>
  );
};

export default App;
