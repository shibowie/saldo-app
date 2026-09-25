import { useState } from "react";

import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

function Transactions() {
    const [filter, setFilter] = useState("all");
    const [sortOrder, setSortOrder] = useState("newest");

    const [editingTransaction, setEditingTransaction] = useState(null);

    return (
        <main>
            <h1>Transactions</h1>

            <label htmlFor="transaction-filter">Visa:</label>
            <select
                id="transaction-filter"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
            >   
                <option value="all">Alla</option>
                <option value="income">Inkomster</option>
                <option value="expense">Utgifter</option>
            </select>

            <label htmlFor="transaction-sort">Sortera:</label>
            <select
                id="transaction-sort"
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
            >   
                <option value="newest">Nyast först</option>
                <option value="oldest">Äldst först</option>
                <option value="highest">Högsta belopp</option>
                <option value="lowest">Lägsta belopp</option>
            </select>

            <TransactionForm 
                editingTransaction={editingTransaction}
                onEditComplete={() => setEditingTransaction(null)}
            />
            <TransactionList 
                filter={filter}
                sortOrder={sortOrder}
                onEdit={setEditingTransaction}
            />
        </main>
    );
}

export default Transactions;