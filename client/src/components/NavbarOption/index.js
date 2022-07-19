function NavbarOption({ text, Icon, active }) {
    return (
        <div className={`navbarOption ${active && "navbarOption--active"}`}>
            <Icon>{text}</Icon>
            <h2>{text}</h2>
        </div>
    );
}

export default NavbarOption;