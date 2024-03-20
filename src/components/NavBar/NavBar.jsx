import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu   } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

const NavBar = () => {
    const [open, setOpen]=useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard', private: true }
    ];

    return (
        <nav className="text-black p-6 bg-yellow-200">
            <div className="md:hidden" onClick={()=>setOpen(!open)}>
                {
                    open===true?<MdOutlineClose className="text-2xl"></MdOutlineClose>
                    : <AiOutlineMenu className="text-2xl"></AiOutlineMenu >
                }
            

            </div>
            <ul className={`md:flex md:static absolute duration-1000 bg-yellow-200 px-6 ${open ? 'top-32':'-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;