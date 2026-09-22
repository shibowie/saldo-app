import { useState } from "react";

import categories from "../data/categories";
import { useTransactions } from "../context/TransactionsContext";

function TransactionForm() {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("expense");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const [titleError, setTitleError] = useState("");
    const [amountError, setAmountError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [dateError, setDateError] = useState("");

    const { addTransaction } = useTransactions();

    function handleSubmit(event) {
        event.preventDefault();

        if (!title.trim()) {
            setTitleError("Beskrivning krävs.");
            return;
        }
        setTitleError("");

        if (!amount || Number(amount) <= 0) {
            setAmountError("Belopp måste vara större än 0.");
            return;
        }
        setAmountError("");

        if (!category) {
            setCategoryError("Välj en kategori.");
            return;
        }
        setCategoryError("");

        if (!date) {
            setDateError("Välj ett datum.");
            return;
        }
        setDateError("");

        const newTransaction = {
            id: Date.now(),
            title: title,
            amount: Number(amount),
            type: type,
            category: category,
            date: date,
        };
    
        addTransaction(newTransaction);

        setTitle("");
        setAmount("");
        setType("expense");
        setCategory("");
        setDate("");
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="title">Beskrivning</label>
            <input
                id="title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            {titleError && <p><b>{titleError}</b></p>}

            <label htmlFor="amount">Belopp</label>
            <input
                id="amount"
                type="number"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
            />

            {amountError && <p><b>{amountError}</b></p>}

            <fieldset>
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
            >   
                <option value="">Välj kategori</option>

                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>

            {categoryError && <p><b>{categoryError}</b></p>}

            <label htmlFor="date">Datum</label>
            <input
                id="date"
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
            />

            {dateError && <p><b>{dateError}</b></p>}

            <p> Du skriver: {title} </p>
            <p> Belopp: {amount}:- </p>
            <p> Typ: {type} </p>
            <p> Kategori: {category} </p>
            <p> Datum: {date}</p>

            <button type="submit">Lägg till transaktion</button>
        </form>
    );
}

export default TransactionForm;