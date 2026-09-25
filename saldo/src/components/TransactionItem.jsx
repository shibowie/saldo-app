import { useTransactions } from "../context/TransactionsContext";

function TransactionItem({ transaction, onEdit, showActions }) {
    const { deleteTransaction } = useTransactions();
    const isIncome = transaction.type === "income";

    const amount = isIncome
        ? `+ ${transaction.amount}`
        : `- ${transaction.amount}`;

    return (
        <article className="transaction-item">
            <div>
                <h2>{transaction.title}</h2>
                <div className="transaction-meta">
                    <p>{transaction.category}</p>
                    <p>{transaction.date}</p>
                </div>
            </div>
            <div className="transaction-actions">
                <p className={isIncome ? "income-amount" : "expense-amount"}>
                    {amount} kr
                </p>

                {showActions && (
                    <div className="transaction-buttons">
                        <button 
                            type="button"
                            onClick={() => onEdit(transaction)}
                        >
                            Redigera
                        </button>
                    
                        <button
                            className="delete-button"
                            type="button"
                            onClick={() => {
                                const confirmed = window.confirm(
                                    `Vill du verkligen radera "${transaction.title}"?`
                                );
                            
                                if (confirmed) {
                                    deleteTransaction(transaction.id);
                                }
                            }}
                            >
                            Radera
                        </button>
                    </div>
                )}                
            </div>
        </article>
    );
}

export default TransactionItem;