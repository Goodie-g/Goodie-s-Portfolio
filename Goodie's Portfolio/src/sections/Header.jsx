const Header = () => {
    return (
        <header className="flex justify-center">
            <nav className="flex flex-row gap-4">
                <HeaderItem value= 'Languages & Tools' href='#Languages-&-Tools' />
                <HeaderItem value= 'Projects' href='#Projects' />
                <HeaderItem value= 'About' href='#About' />
                {/* <HeaderItem value= 'Contact' href='#Contact' /> */}
            </nav>
        </header>
    )
}

function HeaderItem({ value, href }) {
    return (
        <a className="header-item active:scale-95 text-[18px] max-[1024px]:text-[26px] max-[640px]:text-[24px] max-[384px]:text-[22px] hover:scale-110 max-[1024px]:hover:scale-105 transition-all transition duration-200 hover:brightness-125 cursor-pointer" href={href} >{value}</a>
    )
}

export default Header;