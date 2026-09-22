import SummaryCards from "../components/SummaryCards";
import CategoryOverview from "../components/CategoryOverview";
import TransactionList from "../components/TransactionList";

function Dashboard() {
    return (
        <>
            <main>
                <h1>Saldo</h1>

                <SummaryCards />

                <section>
                    <CategoryOverview />

                    <div>
                        <h2>Senaste transaktioner</h2>
                        <TransactionList />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Dashboard;
