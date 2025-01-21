import React from 'react'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';

const Navbar = () => {
    const {account}=useContext(DataContext);

  return (
    <>
        <div>
            <div className="flex items-center justify-between h-16">
                <div className="w-full justify-between flex items-center">
                    <div className="hidden md:block">
                        <div className="flex items-baseline ml-10 space-x-4">
                            <button type="button" className="py-1 px-2  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                                <NavLink to='/contribute'>Contribute</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
