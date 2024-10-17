import "./style.css";

interface HeaderProps {
    timeline: any
}

const Header = ({timeline}: HeaderProps) => {

    return (
        <>
            <header className="header">
                <p className="header-menu">Menu</p>
                <p className="header-logo">N3</p>
                <button className="button">Order</button>
            </header>
        </>
    );

};

export default Header;