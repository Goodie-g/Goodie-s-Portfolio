import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="flex justify-center mt-[1rem]">
            <nav className="flex-row gap-4 text-sm md:text-lg lg:text-xl hidden md:flex">
                <HeaderItem value= 'Languages & Tools' href='#Languages-&-Tools' />
                <HeaderItem value= 'Projects' href='#Projects' />
                <HeaderItem value= 'About' href='#About' />
                {/* <HeaderItem value= 'Contact' href='#Contact' /> */}
            </nav>

            {isOpen && (
                <nav className="absolute top-20 left-0 w-full bg-black flex flex-col items-center py-8 gap-6 md:hidden z-100">
                    <a href="#Home">Home</a>
                    <a href="#Projects">Projects</a>
                    <a href="#About">About</a>
                    <a href="#Contact">Contact</a>
                </nav>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-3xl"
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>
        </header>
    )
}

function HeaderItem({ value, href }) {
    return (
        <a className="header-item active:scale-95 text-[18px] max-[1024px]:text-[26px] max-[640px]:text-[24px] max-[384px]:text-[22px] hover:scale-110 max-[1024px]:hover:scale-105 transition-all transition duration-200 hover:brightness-125 cursor-pointer" href={href} >{value}</a>
    )
}

export default Header;