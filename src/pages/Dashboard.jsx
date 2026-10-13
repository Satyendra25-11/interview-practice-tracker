import {
  BookOpen,
  Code2,
  Brain,
  Laptop2,
  PlayCircle,
  ChevronRight,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Questions",
      value: 420,
      icon: <BookOpen size={30} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Completed DSA",
      value: 185,
      icon: <Brain size={30} />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Interview Questions",
      value: 96,
      icon: <Code2 size={30} />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Machine Coding",
      value: "3 / 10",
      icon: <Laptop2 size={30} />,
      color: "bg-orange-100 text-orange-600",
    },
  ];

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

        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl flex items-center justify-between shadow-sm py-2 px-5"
          >
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.color}`}
            >
              {item.icon}
            </div>

           <div>
             <p className="text-gray-800 mt-5">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold mt-1">
              {item.value}
            </h2>
           </div>
          </div>
        ))}

      </div>

      {/* Progress */}

      <div className="bg-white rounded-xl  shadow-sm p-6 mt-8">

        <h2 className="text-2xl font-semibold mb-3">
          Progress Overview
        </h2>

        <div className="flex justify-between gap-7 w-full">
            {[
          { title: "DSA", value: 62 },
          { title: "Interview Questions", value: 48 },
          { title: "Machine Coding", value: 30 },
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