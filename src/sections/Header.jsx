import { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

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
                    <a
                        href="#Contact"
                        className="hidden md:inline-flex rounded-lg bg-[#58c4dc] px-4 py-2 text-sm font-medium text-[#16171d] transition-colors duration-300 hover:bg-[#8fe8f7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58c4dc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16171d]"
                    >
                        Work With Me
                    </a>

                    {/* Mobile toggle */}
                    <button
                        ref={buttonRef}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? "Close main menu" : "Open main menu"}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg text-gray-400 transition-all duration-300  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58c4dc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16171d] md:hidden"
                    >
                        <span
                            className={`transition-all duration-300 ease-in-out ${
                                isOpen
                                    ? "rotate-90 scale-100 opacity-100"
                                    : "rotate-0 scale-100 opacity-100"
                            }`}
                        >
                            {isOpen ? (
                                <FiX aria-hidden="true" />
                            ) : (
                                <FiMenu aria-hidden="true" />
                            )}
                        </span>
                    </button>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <nav
                        ref={menuRef}
                        id="mobile-menu"
                        aria-label="Mobile navigation"
                        className="absolute inset-x-0 top-full mt-2 flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#16171d] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:hidden"
                    >
                        <ul className="flex flex-col gap-1 list-none m-0 p-0">
                            {navItems.map((item) => (
                                <li key={item.value}>
                                    <HeaderItem
                                        value={item.value}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                    />
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#Contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 rounded-lg bg-[#58c4dc] px-4 py-2.5 text-center text-sm font-medium text-[#16171d] transition-colors duration-300 hover:bg-[#8fe8f7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58c4dc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16171d]"
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
            className="block rounded-lg px-4 py-2 text-sm text-gray-400 transition-colors duration-300 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58c4dc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16171d]"
        >
            {value}
        </a>
    );
}

export default Header;
