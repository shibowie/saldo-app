function TransactionItem({ transaction }) {
    const isIncome = transaction.type === "income";

    const amount = isIncome
        ? `+ ${transaction.amount}`
        : `- ${transaction.amount}`;

    return (
        <article>
            <h2>{transaction.title}</h2>

            <p>
                {transaction.category} | {transaction.date}
            </p>

            <p>{amount} kr</p>
        </article>
    );
}

export default TransactionItem;