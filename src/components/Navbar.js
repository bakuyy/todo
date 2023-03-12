import { useState } from "react";
import {GoThreeBars} from "react-icons/go"
import Logo from '../images/logo1.png'


import {
    Link,
    useLocation
} from "react-router-dom"

const links =[
    {
        name:"Notes",
        link: "/notes",
        id: "notes",
        priority: false
    },
    {
        name:"Clubs",
        link: "/extracurriculars",
        id: "clubs",
        priority: false
    },
    {
        name:"Classes",
        link: "/classes",
        id: "classes",
        priority: false
    },
    {
        name: "—————————"
    }
       
]


const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const { pathname } = useLocation();

    return (
        //{pathname ? opacity:0 : opacity:1}
           <header className="flex flex-col justify-center bg-[#4180BA] z-[99999999] min-h-[7vh] py-2 lg:py-4 shadow-xl">
               <div className="container px-4 mx-auto lg:flex lg:items-center m-12">
                   <div className="flex justify-between items-center">
                       <Link className="flex flex-row items-center gap-4 font-bold text-xl text-teal py-2" to="/">
                           {/* <img src="" alt="Logo" width={29} height={42} /> */}
                           <img src={Logo} className="h-80 pl-20"/>

                       </Link>
     
                       <button
                           className="border border-solid border-gray-200 px-3 py-1 rounded text-gray-200 opacity-50 hover:opacity-75 lg:hidden cursor-pointer"
                           aria-label="Menu"
                           data-test-id="navbar-menu"
                           onClick={
                               () => {
                                   setShowDropdown(!showDropdown);
                               }}
                       >
                           <GoThreeBars />
                       </button>
                   </div>
     
                   <div className={`${showDropdown ? "flex" : "hidden"} lg:flex flex-col lg:flex-row lg:ml-auto mt-3 text-2xl pr-10 lg:mt-0`} data-test-id="navbar">
                            <div>
                                {links.map(({ name, link, priority, id }) => 
                                    <Link key={name} className={`${priority ? "text-blue-900 hover:bg-purple-900 hover:text-white text-center border border-solid border-purple-900 mt-1 lg:mt-0 lg:ml-1 " : "hover:bg-gray-200/25 text-[#20277d]"}  p-2 lg:px-4 lg:mx-2 rounded duration-300 transition-colors ${pathname === name && "font-bold"}`} to={link}>
                                        {name}
                                    </Link>
                                )}
                                
                      
                            </div>
                    </div>
                </div>
                  
                   
           </header>
    )}

export default Navbar