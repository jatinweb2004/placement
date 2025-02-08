import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contribute = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    company: '',
    jobTitle: '',
    resumeScreening: '',
    round1Name: '',
    round1: '',
    round2Name: '',
    round2: '',
    round3Name: '',
    round3: '',
    round4Name: '',
    round4: '',
    round5Name: '',
    round5: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { name, company, jobTitle, resumeScreening, round1Name, round1, round2Name, round2, round3Name, round3, round4Name, round4 } = data;

    const res = await fetch('/contribute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        company,
        jobTitle,
        resumeScreening,
        round1Name,
        round1,
        round2Name,
        round2,
        round3Name,
        round3,
        round4Name,
        round4,
      }),
    });
    const responseData = await res.json();
    if (!responseData) {
      window.alert('Invalid submission');
      console.log('Invalid submission');
    } else {
      window.alert('Successful submission');
      console.log('Successful submission');
      setData('');
      navigate('/');
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center relative">
 
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#666_40%,#63e_100%)]"></div>


      <div className="w-full lg:w-8/12 px-4">
        <div className="bg-slate-300 shadow-lg rounded-lg p-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Share Your Interview Experience</h2>
            <p className="text-gray-600">Help others by contributing your valuable insights!</p>
          </div>
          <form>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">User Information</h3>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
                name="name"
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Company Information</h3>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Company Name"
                name="company"
                onChange={handleChange}
              />
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Job Title"
                name="jobTitle"
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Resume Screening</h3>
              <div className="flex items-center space-x-4">
                <label className="flex items-center text-gray-700">
                  <input
                    type="radio"
                    className="form-radio text-indigo-600"
                    value="Yes"
                    name="resumeScreening"
                    onChange={handleChange}
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="flex items-center text-gray-700">
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

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Interview Experience</h3>
              {[...Array(4)].map((_, index) => (
                <div key={index} className="mb-4">
                  <input
                    type="text"
                    className="w-full border rounded-lg px-4 py-2 mb-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder={`Round ${index + 1} Name`}
                    name={`round${index + 1}Name`}
                    onChange={handleChange}
                  />
                  <textarea
                    className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="3"
                    placeholder={`Details about Round ${index + 1}`}
                    name={`round${index + 1}`}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={handleClick}
                className="bg-slate-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
