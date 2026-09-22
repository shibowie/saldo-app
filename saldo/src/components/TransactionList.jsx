import { useTransactions } from "../context/TransactionsContext";
import TransactionItem from "./TransactionItem";

function TransactionList() {
    const { transactions } = useTransactions();

    return (
        <section>
            {transactions.map((transaction) => (
                <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                />
            ))}
        </section>
    );
}

export default TransactionList;