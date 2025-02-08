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
    <>
      <section className="py-8 bg-gray-50 min-h-screen">
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                Interview Experiences
              </h2>
              <p className="text-gray-600 mt-2">
                
              </p>
            </div>
            <div className="flex justify-center items-center mb-8">
              <label
                htmlFor="search"
                className="text-lg text-gray-700 font-medium mr-4"
              >
                Enter company name:
              </label>
              <input
                type="search"
                id="search"
                onChange={(e) => setSearch(e.target.value)}
                className="block w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by company name..."
              />
            </div>
            {interviewdata
              .filter((info) =>
                search.toLowerCase() === ""
                  ? info
                  : info.company.toLowerCase().includes(search)
              )
              .map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg shadow-md p-6 mb-6"
                >
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    {info.company} Interview Rounds and Process
                  </h3>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">
                    {info.jobTitle} Interview Questions
                  </h4>
                  <p className="text-gray-600 mb-4">Shared by: {info.name}</p>

                  <div className="flex items-center mb-4">
                    <div className="flex flex-col items-center">
                      <div className="text-sm text-gray-600 font-medium mb-1">Round</div>
                      <div className="bg-blue-100 h-12 w-12 flex items-center justify-center rounded-full text-blue-600 font-bold">
                        01
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-semibold text-gray-800">
                        {info.round1Name}
                      </h4>
                      <p className="text-sm text-gray-600">{info.round1}</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 h-12 w-12 flex items-center justify-center rounded-full text-blue-600 font-bold">
                      02
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-semibold text-gray-800">
                        {info.round2Name}
                      </h4>
                      <p className="text-sm text-gray-600">{info.round2}</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 h-12 w-12 flex items-center justify-center rounded-full text-blue-600 font-bold">
                      03
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-semibold text-gray-800">
                        {info.round3Name}
                      </h4>
                      <p className="text-sm text-gray-600">{info.round3}</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 h-12 w-12 flex items-center justify-center rounded-full text-blue-600 font-bold">
                      04
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-semibold text-gray-800">
                        {info.round4Name}
                      </h4>
                      <p className="text-sm text-gray-600">{info.round4}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InterviewData;
