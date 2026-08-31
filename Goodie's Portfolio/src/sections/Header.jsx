import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { value: "Languages & Tools", href: "#Languages-&-Tools" },
        { value: "Projects", href: "#Projects" },
        { value: "About", href: "#About" }
    ];

    return (
        <header className="sticky top-0 z-50 px-6 md:px-12 lg:px-16 pt-4">
            <div className="relative">

                {/* Nav bar */}
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#16171d]/80 px-5 py-3 backdrop-blur-md">

                    {/* Logo */}
                    <a
                        href="#"
                        className="text-base font-semibold tracking-tight text-white transition-colors duration-300 hover:text-[#8fe8f7]"
                    >
                        goodie<span className="text-[#58c4dc]">dev</span>
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <HeaderItem key={item.value} value={item.value} href={item.href} />
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <a
                        href="#Contact"
                        className="hidden md:inline-flex rounded-lg bg-[#58c4dc] px-4 py-2 text-sm font-medium text-[#16171d] transition-colors duration-300 hover:bg-[#8fe8f7]"
                    >
                        Work With Me
                    </a>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg text-gray-400 transition-all duration-300 hover:border-[#58c4dc]/60 hover:text-[#58c4dc] md:hidden"
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <nav className="absolute inset-x-0 top-full mt-2 flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#16171d] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:hidden">
                        {navItems.map((item) => (
                            <HeaderItem
                                key={item.value}
                                value={item.value}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                            />
                        ))}
                        <a
                            href="#Contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 rounded-lg bg-[#58c4dc] px-4 py-2.5 text-center text-sm font-medium text-[#16171d] transition-colors duration-300 hover:bg-[#8fe8f7]"
                        >
                            Work With Me
                        </a>
                    </nav>
                )}
            </div>
        </header>
    );
};

function HeaderItem({ value, href, onClick }) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="rounded-lg px-4 py-2 text-sm text-gray-400 transition-colors duration-300 hover:bg-white/5 hover:text-white"
        >
            {value}
        </a>
    );
}

export default Header;
