import React from "react";


function Navbar(){
    return (
        <nav className="fixed bg-white w-[80vw] top-10 left-0 right-0 mx-auto rounded-full p-3 flex justify-between" >
            <div className="logo flex  gap-25 items-center">
            <img  loading="eager" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" className="nav-desktop-logo h-7 py-0.5 pl-4"></img>
            <ul className="flex gap-10">
                <li>Templates</li>
                <li>Marketplace</li>
                <li>Discover</li>
                <li>Pricing</li>
                <li>Learn</li>
            </ul>
            </div>
            <div className="flex gap-3">
            <button className="login bg-gray-200 rounded-lg p-3 hover:bg-gray-300 font-bold">Log in</button>
            <button className="signup bg-black text-white rounded-full p-3 font-bold">Sign up Free</button>
            </div>
        </nav>
    )
}

export default Navbar;