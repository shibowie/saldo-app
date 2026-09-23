function TransactionItem({ transaction }) {
    const isIncome = transaction.type === "income";

    const amount = isIncome
        ? `+ ${transaction.amount}`
        : `- ${transaction.amount}`;

    return (
        <article className="transaction-item">
            <div>
                <h2>{transaction.title}</h2>
                <p>
                    {transaction.category} | {transaction.date}
                </p>
            </div>
            <p className={isIncome ? "income-amount" : "expense-amount"}>
                {amount} kr
            </p>
        </article>
    );
}

export default TransactionItem;