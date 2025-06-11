import React from "react";

const ProfilePage = () => {
  return (
    <div className="px-4 sm:px-8">
      {/* Profile Card Container */}
      <main className="w-full max-w-screen-xl mx-auto mt-8 mb-20 px-4 sm:px-8 py-8 border-4 border-[#0075FF] rounded-xl shadow-sm">
        <h1 className="text-[36px] sm:text-[48px] md:text-[60px] font-bold text-center text-black mb-8">
          Profile Page
        </h1>

        {/* Personal Info Header */}
        <p className="text-[#0075FF] mb-4 text-2xl sm:text-3xl md:text-5xl">Hi, Sam Chitrala</p>
        <p className="text-[#0075FF] font-semibold mt-2 mb-8 text-xl sm:text-2xl md:text-3xl">
          Personal Information
        </p>

        {/* Info Card */}
        <div className="bg-white border border-gray-300 rounded-xl p-5 mb-6">
          {/* Name Row */}
          <div className="flex justify-between items-center mb-3">
            <label className="text-base text-black-600">Name</label>
            <div className="flex items-center gap-2">
              <span className="text-base text-black-800">Sam Chitrala</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-8 sm:w-8 text-[#0075FF] cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536M9 11l6 6m0-6l-6 6m0 0h6m0 0V9"
                />
              </svg>
            </div>
          </div>

          {/* Email Row */}
          <div className="flex justify-between items-center">
            <label className="text-base text-black-600">Email</label>
            <span className="text-base text-black-700">s**********fo@gmail.com</span>
          </div>
        </div>

        {/* Resume Stats */}
        <div className="mt-6 border border-gray-300 rounded-xl p-6">
          <h2 className="text-[#0075FF] text-2xl sm:text-3xl font-semibold mb-4">
            Resume Stats
          </h2>

          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            {/* Circular ATS Score */}
            <div className="flex flex-col items-center">
              <svg className="w-[200px] sm:w-[250px] h-[200px] sm:h-[250px]" viewBox="0 0 36 36">
                <path
                  className="text-[#D1E9FF]"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-[#0075FF]"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="78, 100"
                  fill="none"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="fill-[#0075FF]" textAnchor="middle" fontSize="6" fontWeight="bold">
                  78/100
                </text>
              </svg>
              <p className="mt-1 text-base sm:text-lg font-bold text-black flex items-center gap-2">
                ATS Score <span className="text-[#0075FF]">ℹ️</span>
              </p>
            </div>

            {/* Metrics */}
            <div className="flex-1 w-full space-y-4">
              {[
                { label: "Skills", score: 40 },
                { label: "Work Experience", score: 40 },
                { label: "Projects", score: 40 },
                { label: "Education", score: 40 },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full flex items-center justify-between bg-[#E6F0FF] rounded-full px-2 py-1 shadow-sm"
                >
                  <div className="bg-[#0075FF] text-white text-sm sm:text-base font-semibold rounded-full px-4 py-2 shadow">
                    {item.label}
                  </div>
                  <div className="flex items-center gap-2 pr-3">
                    <span className="font-medium text-sm sm:text-base text-black">{item.score}</span>
                    <span className="text-[#0075FF]">ℹ️</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Missing Keywords */}
        <div className="mt-8">
          <h2 className="text-[18px] sm:text-[20px] font-semibold text-gray-700 mb-2">
            Missing Keywords
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Communication",
              "Leadership",
              "Teamwork",
              "Creativity",
              "Problem Solving",
              "Time Management",
              "Project Planning",
              "Adaptability",
              "Analytical Thinking",
            ].map((keyword, index) => (
              <span
                key={index}
                className="bg-red-100 text-red-700 border border-red-300 rounded-full px-3 py-1 text-sm sm:text-[16px] md:text-[20px] font-medium"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Suggested Jobs */}
        <div className="mt-8">
          <h2 className="text-[18px] sm:text-[20px] font-semibold text-gray-700 mb-2">Suggested Jobs</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Frontend Developer",
              "Backend Engineer",
              "Project Manager",
              "UX Designer",
              "Product Analyst",
            ].map((job, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 border rounded-full px-3 py-1 text-sm sm:text-[16px] md:text-[20px] font-medium"
              >
                {job}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between">
          <button className="text-base sm:text-[20px] w-full sm:w-auto text-white bg-black border border-gray-300 rounded px-6 py-2 hover:bg-gray-100 hover:text-black">
            Resume History
          </button>
          <button className="text-base sm:text-[20px] w-full sm:w-auto bg-[#0075FF] text-white rounded px-6 py-2 hover:bg-blue-700">
            Upload Resume
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
