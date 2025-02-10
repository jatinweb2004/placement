import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contribute = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    company: "",
    jobTitle: "",
    resumeScreening: "",
    round1Name: "",
    round1: "",
    round2Name: "",
    round2: "",
    round3Name: "",
    round3: "",
    round4Name: "",
    round4: "",
    round5Name: "",
    round5: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch("/contribute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Successful submission");
      setData({
        name: "",
        company: "",
        jobTitle: "",
        resumeScreening: "",
        round1Name: "",
        round1: "",
        round2Name: "",
        round2: "",
        round3Name: "",
        round3: "",
        round4Name: "",
        round4: "",
        round5Name: "",
        round5: "",
      });
      navigate("/");
    } else {
      alert("Invalid submission");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 sm:py-16 bg-gradient-to-br from-gray-700 to-indigo-900">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl p-6 sm:p-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Share Your Interview Experience
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Help others by contributing your valuable insights!
          </p>
        </div>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              name="name"
              onChange={handleChange}
            />
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
              placeholder="Company Name"
              name="company"
              onChange={handleChange}
            />
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
              placeholder="Job Title"
              name="jobTitle"
              onChange={handleChange}
            />
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Resume Screening</h3>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  className="form-radio text-indigo-600"
                  value="Yes"
                  name="resumeScreening"
                  onChange={handleChange}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  className="form-radio text-indigo-600"
                  value="No"
                  name="resumeScreening"
                  onChange={handleChange}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Interview Experience</h3>
            {[...Array(4)].map((_, index) => (
              <div key={index} className="mt-4">
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                  placeholder={`Round ${index + 1} Name`}
                  name={`round${index + 1}Name`}
                  onChange={handleChange}
                />
                <textarea
                  className="w-full mt-2 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                  rows="3"
                  placeholder={`Details about Round ${index + 1}`}
                  name={`round${index + 1}`}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button
              type="button"
              onClick={handleClick}
              className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contribute;
