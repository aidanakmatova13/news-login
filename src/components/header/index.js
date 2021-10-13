import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/actions/userActions";

const Header = () => {
    const user = useSelector(s => s.user.user)
    const dispatch = useDispatch()
    return (
        <header className='bg-red-500 p-4 mb-4'>
            <div className="container mx-auto flex justify-between">
                <Link to='/' className='text-white font-bold text-xl'> Logo</Link>
                <ul className='flex'>
                    <li><NavLink to='/' className='text-white'>Home</NavLink></li>
                    <li><NavLink to='/news' className='text-white mx-3'>News</NavLink></li>
                    {
                        !user &&
                        <li><NavLink to='/login' className='text-white'>Login</NavLink></li>
                    }
                    {
                        user &&
                        <li><button className='text-white' onClick={() => dispatch(logout())}>Logout</button></li>
                    }
                </ul>
            </div>
        </header>
    );
};

export default Header;