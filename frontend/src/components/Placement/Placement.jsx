import React from 'react'
import { useState } from 'react'

function Placement() {
  const [form, setform] = useState({ username: "", branch: "" })

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const branches = [
    "All",
    "Electronics and Communication Engineering",
    "Electronics and Electrical Engineering",
    "Computer Science and Engineering",
    "Data Science and Artificial Intelligence",
    "Mathematics and Computing",
    "Bioscience and Bioengineering",
    "Chemical Engineering",
    "Chemical Science and Technology",
    "Civil Engineering",
    "Mechanical Engineering",
    "Engineering Physics",
    "Energy Engineering",
    "Minor in CSE",
    "Minor in EE",
    "Minor in Maths"
  ];

  return (
    <>
      <div className="bg-sky-100 min-h-screen flex flex-col items-center py-6">
        
        <div className="bg-sky-300 w-full max-w-6xl text-center py-4 rounded-md mb-6 shadow-lg">
          <h1 className="text-black text-4xl font-bold">Experiences</h1>
        </div>

        
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Name</label>
            <input
              value={form.username}
              onChange={handlechange}
              placeholder="Enter Name"
              className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="text"
              name="username"
              id="username"
            />
          </div>

         
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Select Branch</label>
            <select
              name="branch"
              value={form.branch}
              onChange={handlechange}
              className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {branches.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

         
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Company</label>
            <select
              name="branch"
              value={form.branch}
              onChange={handlechange}
              className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {branches.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Profile</label>
            <select
              name="branch"
              value={form.branch}
              onChange={handlechange}
              className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {branches.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

         
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Graduation Year</label>
            <select
              name="branch"
              value={form.branch}
              onChange={handlechange}
              className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {branches.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Experience Type</label>
            <select
              name="branch"
              value={form.branch}
              onChange={handlechange}
              className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {branches.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
        </div>

        
        <div className="flex justify-center mt-6 space-x-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
            Filter
          </button>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default Placement

