import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="flex md:justify-center justify-end mt-[1rem] bg-[#16171d]">
            <nav className="md:flex flex-row gap-4 text-sm md:text-lg lg:text-xl hidden bg-inherit">
                <HeaderItem value= 'Languages & Tools' href='#Languages-&-Tools' />
                <HeaderItem value= 'Projects' href='#Projects' />
                <HeaderItem value= 'About' href='#About' />
                {/* <HeaderItem value= 'Contact' href='#Contact' /> */}
            </nav>

            {isOpen && (
                <nav className="absolute top-20 left-0 w-full bg-black flex flex-col items-center py-8 gap-6 md:hidden z-100">
                    <HeaderItem value= 'Languages & Tools' href='#Languages-&-Tools' />
                    <HeaderItem value= 'Projects' href='#Projects' />
                    <HeaderItem value= 'About' href='#About' />
                    {/* <HeaderItem value= 'Contact' href='#Contact' /> */}
                </nav>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-3xl mr-[1rem]"
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