const Header = () => {
    return (
        <header className="flex justify-center">
            <nav className="flex flex-row gap-2">
                <HeaderItem value= 'Languages & Tools'/>
                <HeaderItem value= 'Projects' />
                <HeaderItem value= 'About'/>
                <HeaderItem value= 'Contact' />
            </nav>
        </header>
    )
}

function HeaderItem({ value }) {
    return (
        <p className="header-item">{value}</p>
    )
}

export default Header;