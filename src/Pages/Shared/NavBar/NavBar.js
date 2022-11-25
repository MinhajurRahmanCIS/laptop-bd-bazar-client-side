import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../asset/logo.png';
const NavBar = () => {
    const menuItems = <>

                <>
                    <li className='font-semibold'><Link to='/'>Home</Link></li>
                    <li className='font-semibold'><Link to='/'>Reviews</Link></li>
                    <li className='font-semibold'><Link to='/'>Add Service</Link></li>
                    <li className='font-semibold'><Link to='/'>Blog</Link></li>
                </>
                {/* <>
                    <li className='font-semibold'><Link to='/'>Home</Link></li>
                    <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                </> */}




    </>

    // const account = <>
    //     {
    //         user?.email ?
    //             <>
    //                 <li><Link onClick={handleLogOut}>Logout</Link></li>
    //             </>
    //             :
    //             <>
    //                 <li><Link to='/login'>Login</Link></li>
    //                 <li><Link to='/signup'>Signup</Link></li>
    //             </>

    //     }
    // </>

    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-300">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
            </div>
            <Link to="/" className="menu normal-case text-xl w-20 mb-12 btn btn-ghost">
                <img src={logo} alt="" />
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 pb-3">
                {menuItems}
            </ul>
        </div>
        <div className="navbar-end">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full tooltip" data-tip="hello">
                        {/* {
                            user?.email ?
                                <img src={img} alt="" />
                                :
                                <img src={noImg} alt="" />

                        } */}

                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {/* {account} */}
                </ul>
            </div>
        </div>
    </div >
    );
};

export default NavBar;