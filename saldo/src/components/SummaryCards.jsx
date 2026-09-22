import { useTransactions } from "../context/TransactionsContext";

function SummaryCards() {
    const { transactions } = useTransactions();

    const income = transactions
        .filter((transaction) => transaction.type === "income")
        .reduce((total, transaction) => total + transaction.amount, 0);

    const expenses = transactions
        .filter((transaction) => transaction.type === "expense")
        .reduce((total, transaction) => total + transaction.amount, 0);

    const balance = income - expenses;

    return (
        <section>
            <div>
                <h2>Inkomster</h2>
                <p>{income} kr</p>
            </div>

            <div>
                <h2>Utgifter</h2>
                <p>{expenses} kr</p>
            </div>

            <div>
                <h2>Saldo</h2>
                <p>{balance} kr</p>
            </div>
        </section>
    );
}

export default SummaryCards;