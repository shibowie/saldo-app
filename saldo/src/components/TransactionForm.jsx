import { useState, useEffect } from "react";

import categories from "../data/categories";
import { useTransactions } from "../context/TransactionsContext";

function TransactionForm({ editingTransaction, onEditComplete }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("expense");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState(
        new Date().toISOString().split("T")[0]
    );

    const [titleError, setTitleError] = useState("");
    const [amountError, setAmountError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [dateError, setDateError] = useState("");

    function resetForm() {
        setTitle("");
        setAmount("");
        setType("expense");
        setCategory("");
        setDate(new Date().toISOString().split("T")[0]);

        setTitleError("");
        setAmountError("");
        setCategoryError("");
        setDateError("");
    }

    useEffect(() => {
        if (!editingTransaction) {
            return;
        }
    
        setTitle(editingTransaction.title);
        setAmount(editingTransaction.amount);
        setType(editingTransaction.type);
        setCategory(editingTransaction.category);
        setDate(editingTransaction.date);
    }, [editingTransaction]);

    const { addTransaction, updateTransaction } = useTransactions();

    function handleSubmit(event) {
        event.preventDefault();

        let hasErrors = false;

        if (!title.trim()) {
            setTitleError("Beskrivning krävs.");
            hasErrors = true;
        } else {
            setTitleError("");
        }
    
        if (!amount || Number(amount) <= 0) {
            setAmountError("Belopp måste vara större än 0.");
            hasErrors = true;
        } else {
            setAmountError("");
        }
    
        if (!category) {
            setCategoryError("Välj en kategori.");
            hasErrors = true;
        } else {
            setCategoryError("");
        }
    
        if (!date) {
            setDateError("Välj ett datum.");
            hasErrors = true;
        } else {
            setDateError("");
        }
    
        if (hasErrors) {
            return;
        }

        if (editingTransaction) {
            updateTransaction({
                id: editingTransaction.id,
                title,
                amount: Number(amount),
                type,
                category,
                date,
            });
        } else {
            addTransaction({
                id: Date.now(),
                title,
                amount: Number(amount),
                type,
                category,
                date,
            });
        }

        if (editingTransaction) {
            resetForm();
            onEditComplete();
        }
    
        addTransaction(newTransaction);

        setTitle("");
        setAmount("");
        setType("expense");
        setCategory("");
        setDate(new Date().toISOString().split("T")[0]);
    }

    return (
        <form className="transaction-form" onSubmit={handleSubmit}>

            <label htmlFor="title">Beskrivning</label>
            <input
                id="title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                aria-invalid={!!titleError}
                aria-describedby={titleError ? "title-error" : undefined}
            />

            {titleError && (
                <p className="form-error" id="title-error">
                    {titleError}
                </p>
            )}

            <label htmlFor="amount">Belopp</label>
            <input
                id="amount"
                type="number"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                aria-invalid={!!amountError}
                aria-describedby={amountError ? "amount-error" : undefined}
            />

            {amountError && (
                <p className="form-error" id="title-error">
                    {amountError}
                </p>
            )}

            <fieldset className="transaction-type">
                <legend>Typ</legend>
                    <label>
                        <input
                            type="radio"
                            name="type"
                            value="expense"
                            checked={type === "expense"}
                            onChange={(event) => setType(event.target.value)}
                        />
                        Utgift
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="type"
                            value="income"
                            checked={type === "income"}
                            onChange={(event) => setType(event.target.value)}
                        />
                        Inkomst
                    </label>
            </fieldset>

            <label htmlFor="category">Kategori</label>
            <select
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                aria-invalid={!!categoryError}
                aria-describedby={categoryError ? "category-error" : undefined}
            >   
                
                <option value="">Välj kategori</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>

            {categoryError && (
                <p className="form-error" id="category-error">
                    {categoryError}
                </p>
            )}

            <label htmlFor="date">Datum</label>
            <input
                id="date"
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                aria-invalid={!!dateError}
                aria-describedby={dateError ? "date-error" : undefined}
            />

            {dateError && (
                <p className="form-error" id="date-error">
                    {dateError}
                </p>
            )}

            <button className="submit-button" type="submit">
                {editingTransaction
                ? "Spara ändringar"
                : "Lägg till transaktion"}
            </button>

            {editingTransaction && (
                <button
                    className="cancel-button"
                    type="button"
                    onClick={() => {
                        resetForm();
                        onEditComplete();
                    }}
                >
                    Avbryt
                </button>
            )}
        </form>
    );
}

export default TransactionForm;