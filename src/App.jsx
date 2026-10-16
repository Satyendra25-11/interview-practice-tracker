import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Questions from "./components/Questions";
import MachineCoding from "./components/MachineCoding";

const App = () => {
  const questions = JSON.parse(localStorage.getItem("questions"));

  const [totalQuestions, setTotalQuestions] = useState(questions.length || 0);
  const [dsaQuestions, setDsaQuestions] = useState(() => {
    return questions.filter((q) => q.category === "DSA")
  });

  const [interviewQuestions, setInterviewQuestions] = useState(() => {
    return questions.filter(
      (q) => q.category === "Frontend" || q.category === "Backend" || q.category === "Git",
    )
  });
  const [machineCoding, setMachineCoding] = useState(0);

  

  const [completedDsa, setCompletedDsa] = useState(dsaQuestions.filter((q)=> q.status === "completed"))
  const [completedInterview, setCompletedInterview] = useState(interviewQuestions.filter((q)=> q.status === "completed"))

  // const completedDsa = dsaQuestions.filter((q)=> q.status === "completed")
  // const completedInterview = interviewQuestions.filter((q)=> q.status === "completed")


  


  // const [totalCodingQuestions, setTotalCodingQuestions] = useState(JSON.parse(localStorage.getItem("codingQuestions")))





  const [codingQuestions, setcodingQuestions] = useState(JSON.parse(localStorage.getItem("codingQuestions")))





  
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
      <MachineCoding setcodingQuestions={setcodingQuestions}/>
      <Questions
        setTotalQuestions={setTotalQuestions}
        setDsaQuestions={setDsaQuestions}
        setInterviewQuestions={setInterviewQuestions}
        setMachineCoding={setMachineCoding}
      />
    </div>
  );
};

export default App;
