const Header = () => {
    return (
        <header className="flex justify-center">
            <nav className="flex flex-row gap-4">
                <HeaderItem value= 'Languages & Tools' />
                <HeaderItem value= 'Projects' />
                <HeaderItem value= 'About'/>
                <HeaderItem value= 'Contact' />
            </nav>
        </header>
    )
}

function HeaderItem({ value }) {
    return (
        <p className="header-item active:scale-95 text-[18px] max-[1024px]:text-[26px] max-[640px]:text-[24px] max-[384px]:text-[22px] hover:scale-110 max-[1024px]:hover:scale-105 transition-all transition duration-200 hover:brightness-125">{value}</p>
    )
}

export default Header;