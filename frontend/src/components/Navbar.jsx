import React from 'react'
import { Link } from 'react-router'
import { useAuthStore } from '../store/authStore.js';
import toast from "react-hot-toast";
const Navbar = () => {
const { user, logout } = useAuthStore();

console.log("User : ",user);
const handleLogout = async () => {
    const { message } = await logout();
    toast.success(message);
  };

  return (
    <div>
      <nav className="bg-green-800 flex justify-between items-center text-[#FFFCF2] px-4 md:px-12 py-4 md:py-6">

        <Link to={"/"}>
        <label className="font-semibold tracking-wider md:text-lg lg:text-xl cursor-pointer">
          📔SETECBOOKS
        </label>
      </Link>

      {user ? (
         <div className="flex items-center space-x-5 md:text-lg">
          <Link to={"/add-book"}>
            <p className="bg-[#403D39] px-3 py-2">Add book</p>
          </Link>
            <p onClick={handleLogout}>Log out({user.username})</p>
        </div>
      ):(
           <div className="flex items-center space-x-5 md:text-lg">
          <Link to={"/login"}>
            <span>Add book</span>
          </Link>

          <Link to={"/login"}>
            <span>Log in</span>
          </Link>

          <Link to={"/signup"}>
            <button className="bg-[#403D39] px-3 py-2">Sign up</button>
          </Link>
        </div>
      )}

      </nav>
    </div>
  )
}

export default Navbar
