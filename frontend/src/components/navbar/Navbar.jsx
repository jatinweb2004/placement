import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';

const Navbar = () => {
    const { account } = useContext(DataContext);

    return (
        <>
            <div className="bg-gray-800 text-white">
                <div className="flex items-center justify-between h-16 px-4">
                    <div className="text-lg font-bold">Interview Hub</div>
                    <div className="flex space-x-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `py-2 px-4 rounded-lg transition duration-200 ${isActive ? 'bg-pink-600' : 'hover:bg-pink-700'}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/contribute"
                            className={({ isActive }) =>
                                `py-2 px-4 rounded-lg transition duration-200 ${isActive ? 'bg-pink-600' : 'hover:bg-pink-700'}`
                            }
                        >
                            Contribute
                        </NavLink>
                    </div>
                    {account && (
                        <div className="text-sm">Welcome, {account.name}</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
