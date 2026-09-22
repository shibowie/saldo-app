import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

function Transactions() {

    return (
        <main>
            <h1>Transactions</h1>
            <TransactionForm />
            <TransactionList />
        </main>
    );
}

export default Transactions;