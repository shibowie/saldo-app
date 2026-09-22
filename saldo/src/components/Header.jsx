import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/">Saldo</Link>

            <nav>
                <Link to="/">Översikt</Link>
                <Link to="/transactions">Transaktioner</Link>
            </nav>
        </header>
    );
}

export default Header;