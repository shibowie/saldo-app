import { createContext, useContext, useState } from "react";

const TransactionsContext = createContext();

const initialTransactions = [
    {
        id: 1,
        title: "Hyra",
        amount: 8900,
        type: "expense",
        category: "Boende",
        date: "2026-09-01"
    },  
    {   
        id: 2,
        title: "ICA Maxi",
        amount: 612,
        type: "expense",
        category: "Mat",
        date: "2026-09-04"
    },  
    {   
        id: 3,
        title: "Lön",
        amount: 28400,
        type: "income",
        category: "Lön",
        date: "2026-09-25"
    },  
    {   
        id: 4,
        title: "SL-kort",
        amount: 990,
        type: "expense",
        category: "Transport",
        date: "2026-09-02"
    },  
    {   
        id: 5,
        title: "Bio",
        amount: 240,
        type: "expense",
        category: "Nöje",
        date: "2026-09-10"
    }
];

export function TransactionsProvider({ children }) {
    const [transactions, setTransactions] =
        useState(initialTransactions);

    function addTransaction(transaction) {
    setTransactions((currentTransactions) => [
            ...currentTransactions,
            transaction,
        ]);
    }

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                addTransaction,
            }}
        >   
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    return useContext(TransactionsContext);
}