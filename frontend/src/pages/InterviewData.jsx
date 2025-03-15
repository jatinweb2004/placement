import React, { useState, useEffect } from "react";
import "./it.css"

const InterviewData = () => {
  const [interviewdata, setInterviewData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedInterview, setSelectedInterview] = useState(null);

  const togglePopup = (info) => {
    setSelectedInterview(info); // Store the clicked interview
  };

  const closePopup = () => {
    setSelectedInterview(null); // Close the popup
  };

  const PopupPage = ({ round1, round2, round3, round4, closePopup }) => {
    return (
      <div className="popup-overlay" onClick={closePopup}>
        <div className="popup" onClick={(e) => e.stopPropagation()}>
          <button className="text-red-500 font-bold mb-4" onClick={closePopup}>
            ✖ Close
          </button>
          {round1 && <h3 className="text-xl font-semibold text-blue-800 mb-4">Round 1: {round1}</h3>}
          {round2 && <h3 className="text-xl font-semibold text-blue-800 mb-4">Round 2: {round2}</h3>}
          {round3 && <h3 className="text-xl font-semibold text-blue-800 mb-4">Round 3: {round3}</h3>}
          {round4 && <h3 className="text-xl font-semibold text-blue-800 mb-4">Round 4: {round4}</h3>}
        </div>
      </div>

    );
  };

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
          {selectedInterview && (
            <PopupPage
              round1={selectedInterview.round1Name}
              round2={selectedInterview.round2Name}
              round3={selectedInterview.round3Name}
              round4={selectedInterview.round4Name}
              closePopup={closePopup}
            />
          )}
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
                <h3
                  onClick={() => togglePopup(info)}
                  className="text-xl font-semibold text-blue-800 mb-4 cursor-pointer hover:text-blue-600"
                >
                  {info.company} Interview Rounds and Process
                </h3>
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  {info.jobTitle} Interview Questions
                </h4>
                <p className="text-gray-600 mb-4">Shared by: {info.name}</p>
                {/* Render Popup if an interview is selected */}
              </div>
            ))}

        </div>
      </div>
    </section>
  );
};

export default InterviewData;
