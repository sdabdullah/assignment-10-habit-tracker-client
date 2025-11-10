import React from 'react';
import { Link, NavLink } from 'react-router';


const HeaderNavbar = () => {
    const navLinks = <>
        <NavLink to='/' className='font-semibold p-3 text-[16px]' ><li> Home </li></NavLink>

        {/* This is the Additional Routes */}
        <NavLink to='/more-games' className='font-semibold p-3 text-[16px]'><li>Add Habit</li></NavLink>
        <NavLink to='/more-games' className='font-semibold p-3 text-[16px]'><li>My Habits</li></NavLink>
    </>

    return (
        <div>
            <div className="navbar justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-[#22d3ee] lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0} className="menu menu-sm dropdown-content bg-[#0e1629] border-2 border-[#06b6d44d] rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}

                        </ul>
                    </div>

                    <Link to='/' className="flex items-center gap-3 btn-neutral text-xl">
                        Habit Tracker
                    </Link>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                {/* {
                    user ? */}

                <div className='flex items-center gap-3'>
                    <div className="dropdown z-10 dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>

                        <ul tabIndex="-1" className="border menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            
                            <li>
                                <a>
                                    Profile
                                </a>
                            </li>

                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    {/* <Link to='/my-profile'>
                        <img className='ring-primary ring-offset-base-100 w-10 lg:w-14 rounded-full border-2 border-[#22d3ee]' src={``} alt="" />
                    </Link> */}

                    {/* {user?.photoURL}  */}

                    <button className="px-4 py-1 text-white rounded-2xl font-semibold bg-linear-to-r from-[#09aed6] to-[#2466ea] border-0 text-md">Logout</button>

                </div>

                {/* : onClick={logOutUser}  */}

                <div className='space-x-2'>
                    <NavLink to='/login' className=' border px-3 py-1 rounded-2xl font-semibold text-[16px]'>Login</NavLink>

                    <NavLink to='/register' className="font-semibold border px-3 py-1 rounded-2xl  ">Register</NavLink>
                </div>
                {/* } */}
            </div>
        </div>
    );
};

export default HeaderNavbar;