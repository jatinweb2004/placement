import React, { useState, useEffect } from "react";

const InterviewData = () => {
  const [interviewdata, setInterviewData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchForms() {
      try {
        const response = await fetch("http://localhost:8000/interviewdata");
        const data = await response.json();
        setInterviewData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchForms();
  }, []);

  return (
    <section className="py-8 bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Interview Experiences
            </h2>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row justify-center items-center mb-6 sm:mb-8">
            <label
              htmlFor="search"
              className="text-lg text-gray-700 font-medium mb-2 sm:mb-0 sm:mr-4"
            >
              Enter company name:
            </label>
            <input
              type="search"
              id="search"
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search by company name..."
            />
          </div>

          {/* Interview Data */}
          {interviewdata
            .filter((info) =>
              search.toLowerCase() === ""
                ? info
                : info.company.toLowerCase().includes(search.toLowerCase())
            )
            .map((info, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md p-6 mb-6 overflow-hidden"
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-4 break-words">
                  {info.company} Interview Rounds and Process
                </h3>
                <h4 className="text-lg font-medium text-gray-800 mb-2 break-words">
                  {info.jobTitle} Interview Questions
                </h4>
                <p className="text-gray-600 mb-4">Shared by: {info.name}</p>

                {/* Interview Rounds */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[info.round1Name, info.round2Name, info.round3Name, info.round4Name].map(
                    (roundName, i) =>
                      roundName && (
                        <div
                          key={i}
                          className="flex items-start sm:items-center bg-white p-4 rounded-lg shadow-sm overflow-hidden"
                        >
                          <div className="bg-blue-100 h-10 w-10 flex items-center justify-center rounded-full text-blue-600 font-bold">
                            {i + 1}
                          </div>
                          <div className="ml-3 max-w-full">
                            <h4 className="text-base font-semibold text-gray-800 truncate">
                              {roundName}
                            </h4>
                            <p className="text-sm text-gray-600 break-words">
                              {info[`round${i + 1}`]}
                            </p>
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewData;
