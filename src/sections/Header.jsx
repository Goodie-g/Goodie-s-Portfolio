import { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import WorkWithMe from "../components/WorkWithMe";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const navItems = [
        { value: "Services", href: "#Services" },
        { value: "Projects", href: "#Projects" },
        { value: "Process", href: "#Process" },
        { value: "About", href: "#About" }
    ];

    // Close menu on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
                buttonRef.current?.focus();
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen]);

    // Trap focus in mobile menu
    useEffect(() => {
        if (isOpen && menuRef.current) {
            const focusableElements = menuRef.current.querySelectorAll(
                'a[href], button:not([disabled])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            firstElement?.focus();

            const handleTab = (e) => {
                if (e.key !== "Tab") return;

                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement?.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement?.focus();
                    }
                }
            };

            document.addEventListener("keydown", handleTab);
            return () => document.removeEventListener("keydown", handleTab);
        }
    }, [isOpen]);

    return (
        <header className="sticky top-0 z-50 px-6 md:px-12 lg:px-16 pt-4" role="banner">
            <div className="relative">

                {/* Nav bar */}
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#16171d]/80 px-5 py-3 backdrop-blur-md">

                    {/* Logo */}
                    <a
                        href="#"
                        aria-label="Godluck John Mbise — Home"
                        className="text-base font-semibold tracking-tight text-white transition-colors duration-300 hover:text-[#8fe8f7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58c4dc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16171d] rounded-sm"
                    >
                        goodie<span className="text-[#58c4dc]">dev</span>
                    </a>

                    {/* Desktop nav */}
                    <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
                        <ul className="flex items-center gap-1 list-none m-0 p-0">
                            {navItems.map((item) => (
                                <li key={item.value}>
                                    <HeaderItem value={item.value} href={item.href} />
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <WorkWithMe />
                    </div>

                    {/* Mobile toggle */}
                    <button
                        ref={buttonRef}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? "Close main menu" : "Open main menu"}
                        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg text-gray-400 transition-all duration-300 hover:border-[#58c4dc]/60 hover:text-[#58c4dc] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58c4dc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16171d] md:hidden"
                    >
                        {/* Menu icon */}
                        <FiMenu
                            aria-hidden="true"
                            className={`absolute transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                                isOpen
                                    ? "rotate-90 scale-50 opacity-0"
                                    : "rotate-0 scale-100 opacity-100"
                            }`}
                        />

                        {/* X icon */}
                        <FiX
                            aria-hidden="true"
                            className={`absolute transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                                isOpen
                                    ? "rotate-0 scale-100 opacity-100"
                                    : "-rotate-90 scale-50 opacity-0"
                            }`}
                        />
                    </button>
                </div>

                {/* Mobile menu */}
                <nav
                    ref={menuRef}
                    id="mobile-menu"
                    aria-label="Mobile navigation"
                    className={`
                        absolute inset-x-0 top-full mt-2 origin-top
                        rounded-2xl border border-white/10
                        bg-[#16171d]/95 p-3
                        shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                        backdrop-blur-xl
                        transition-all duration-300
                        ease-[cubic-bezier(0.4,0,0.2,1)]
                        md:hidden
                        ${
                            isOpen
                                ? "visible translate-y-0 scale-y-100 opacity-100"
                                : "invisible pointer-events-none -translate-y-2 scale-y-95 opacity-0"
                        }
                    `}
                >
                    <ul className="m-0 flex list-none flex-col gap-1 p-0">
                        {navItems.map((item, index) => (
                            <li
                                key={item.value}
                                className={`
                                    transition-all duration-300
                                    ease-[cubic-bezier(0.4,0,0.2,1)]
                                    ${
                                        isOpen
                                            ? "translate-x-0 translate-y-0 opacity-100"
                                            : "-translate-x-2 translate-y-1 opacity-0"
                                    }
                                `}
                                style={{
                                    transitionDelay: isOpen
                                        ? `${100 + index * 45}ms`
                                        : "0ms",
                                }}
                            >
                                <HeaderItem
                                    value={item.value}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                />
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <a
                        href="#Contact"
                        onClick={() => setIsOpen(false)}
                        className={`
                            mt-2 block rounded-lg
                            bg-[#58c4dc]
                            px-4 py-2.5
                            text-center text-sm font-medium
                            text-[#16171d]
                            transition-all duration-300
                            ease-[cubic-bezier(0.4,0,0.2,1)]
                            hover:bg-[#8fe8f7]
                            focus:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-[#58c4dc]
                            focus-visible:ring-offset-2
                            focus-visible:ring-offset-[#16171d]
                            ${
                                isOpen
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-2 opacity-0"
                            }
                        `}
                        style={{
                            transitionDelay: isOpen
                                ? `${100 + navItems.length * 45 + 50}ms`
                                : "0ms",
                        }}
                    >
                        Work With Me
                    </a>
                </nav>
            </div>
        </header>
    );
};

function HeaderItem({ value, href, onClick }) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="block rounded-lg px-4 py-2 text-sm text-gray-400 transition-colors duration-300 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58c4dc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16171d]"
        >
            {value}
        </a>
    );
}

export default Header;
