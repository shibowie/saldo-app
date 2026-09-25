import { Link } from "react-router-dom";

function Header({ theme, setTheme }) {
    return (
        <header>
            <div className="header-left">
                <Link to="/">Saldo</Link>
            
                <nav>
                    <Link to="/">Översikt</Link>
                    <Link to="/transactions">Transaktioner</Link>
                </nav>
            </div>
            
            <label className="theme-selector" htmlFor="theme-select">
                <span>Tema</span>

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