import { Link } from "react-router-dom";

import SummaryCards from "../components/SummaryCards";
import CategoryOverview from "../components/CategoryOverview";
import TransactionList from "../components/TransactionList";
import CurrencyConverter from "../components/CurrencyConverter";

function Dashboard() {
    return (
        <>
            <main>
                <h1>Saldo</h1>

                <SummaryCards />

                <section className="dashboard-grid">
                    <CategoryOverview />
                    <CurrencyConverter />

                    <div className="recent-transactions">
                        <h2>Senaste transaktioner</h2>
                        <TransactionList limit={5} />
                        <Link to="/transactions" className="view-all-link">
                            Visa alla transaktioner →
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Dashboard;
