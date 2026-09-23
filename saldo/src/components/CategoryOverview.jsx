import { useTransactions } from "../context/TransactionsContext";

function CategoryOverview() {
    const { transactions } = useTransactions();

    const expenses = transactions.filter(
        (transaction) => transaction.type === "expense"
    );

    const categories = expenses.reduce((acc, transaction) => {
        if (!acc[transaction.category]) {
            acc[transaction.category] = 0;
        }
    
        acc[transaction.category] += transaction.amount;
    
        return acc;
    }, {});

    return (
        <section className="category-overview">
            <h2>Utgifter per kategori</h2>

            {Object.entries(categories).map(([category, amount]) => (
                <div className="category-row" key={category}>
                    <span>{category}</span>
                    <span>{amount} kr</span>
                </div>
            ))}
        </section>
    );
}

export default CategoryOverview;