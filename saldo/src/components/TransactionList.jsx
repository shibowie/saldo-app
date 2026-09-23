import { useTransactions } from "../context/TransactionsContext";
import TransactionItem from "./TransactionItem";

function TransactionList({ filter="all", sortOrder="newest" }) {
    const { transactions } = useTransactions();

    const filteredTransactions =
        filter === "all"
            ? transactions
            : transactions.filter(
                (transaction) => transaction.type === filter
            );

    const sortedTransactions = [...filteredTransactions].sort((a, b) => {
        if (sortOrder === "newest") {
            return new Date(b.date) - new Date(a.date);
        }
    
        if (sortOrder === "oldest") {
            return new Date(a.date) - new Date(b.date);
        }
    
        if (sortOrder === "highest") {
            return b.amount - a.amount;
        }
    
        if (sortOrder === "lowest") {
            return a.amount - b.amount;
        }
    
        return 0;
    });

    return (
        <section>
            {sortedTransactions.length === 0 ? (
                <p>Inga transaktioner hittades.</p>
            ) : (
                sortedTransactions.map((transaction) => (
                    <TransactionItem
                        key={transaction.id}
                        transaction={transaction}
                    />
                ))
            )}
        </section>
    );
}

export default TransactionList;