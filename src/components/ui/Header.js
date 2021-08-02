import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import icon from '../../images/icon.svg';

export default function Header() {
    const [ setError ] = useState("");
    const { currentUser, logOut } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError("")
    
        try {
          await logOut()
          history.push("/login");
        } catch {
          setError("Failed to log out");
        }
      }

    return (
        <header className="lg:px-16 px-6 mt-30 flex flex-wrap items-center pt-10 pb-10">
            <div className="flex-1 flex justify-between items-center">
                <Link>
                    <img src={icon} style={{height: "50px"}} alt="Cyberlife"/>  
                </Link>
            </div>

            <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
            <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <nav>
                    <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                        <li><a className="bg-grey-900 hover:bg-yellow-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogout} style={{ cursor:'pointer'}}>Logout</a></li>
                    </ul>
                </nav>

                <a href="#" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
                    <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src={currentUser.photoURL} alt={currentUser.displayName} />
                </a>
            </div>
        </header>
    )
}