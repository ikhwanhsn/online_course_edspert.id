import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../public/img/edspertId.png";
import Menu from "../../public/img/menu.svg";

const Navbar = () => {
    const [navbarActive, setNavbarActive] = useState(false);

    const buttonNavbarActive = () => {
        setNavbarActive(true);
    }

    const buttonCloseNavbar = () => {
        setNavbarActive(false)
    }

    const navigate = useNavigate();

    return ( 
        <div className="z-20 flex w-full h-full cursor-pointer">
            <div className="fixed flex items-center justify-between w-full top-5 md:px-16 md:bg-cyan-950 md:top-0 md:py-3">
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="w-8"/>
                    <h1 className="ml-2">Edspert.Id</h1>
                </div>
                <img src={Menu} alt="menu" className="p-1 mr-3 bg-white rounded-sm md:hidden hover:bg-gray-400 w-7" onClick={buttonNavbarActive}/>
                <div className="items-center hidden gap-16 md:flex">
                    <ul className="flex w-full gap-12">
                        <li className="transition-all hover:text-gray-300" onClick={() => navigate('/')}>Program</li>
                        <li className="transition-all hover:text-gray-300">Bidang ilmu</li>
                        <li className="transition-all hover:text-gray-300">Tentang edspert</li>
                    </ul>
                    <button className="w-32 px-4 py-2 mx-auto text-white transition-all bg-orange-500 rounded-full hover:bg-orange-600">Masuk/Daftar</button>
                </div>
            </div>
            {navbarActive && 
            <div className="">
                <div className="fixed z-40 right-3 top-3" onClick={buttonCloseNavbar}>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                    <span className="text-white material-symbols-outlined">close</span>
                </div>
                <div className="fixed top-0 left-0 z-30 flex flex-col w-screen gap-5 pt-12 text-center text-white bg-black pb-7">
                    <ul className="flex flex-col gap-5">
                        <li className="transition-all hover:text-gray-300" onClick={() => navigate('/')}>Program</li>
                        <li className="transition-all hover:text-gray-300">Bidang ilmu</li>
                        <li className="transition-all hover:text-gray-300">Tentang edspert</li>
                    </ul>
                    <button className="w-2/4 px-4 py-2 mx-auto text-white bg-orange-500 rounded-full hover:bg-orange-600">Masuk/Daftar</button>
                </div>
            </div>}
            
        </div>
     );
}
 
export default Navbar;