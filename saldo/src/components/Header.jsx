import { Link } from "react-router-dom";

function Header({ theme, setTheme }) {
    return (
        <header>
            <Link to="/">Saldo</Link>

            <nav>
                <Link to="/">Översikt</Link>
                <Link to="/transactions">Transaktioner</Link>
            </nav>

            <label htmlFor="theme-select">
                Tema
                <select
                    id="theme-select"
                    value={theme}
                    onChange={(event) => setTheme(event.target.value)}
                >   
                    <option value="soft">Soft</option>
                    <option value="neon">Neon</option>
                    <option value="dark">Dark</option>
                </select>
            </label>
        </header>
    );
}

export default Header;