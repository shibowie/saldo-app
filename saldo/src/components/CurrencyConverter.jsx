import { useState } from "react";
import getExchangeRate from "../services/currencyApi";

function CurrencyConverter() {
    const [amount, setAmount] = useState("");
    const [rate, setRate] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [inputError, setInputError] = useState("");

    async function handleConvert() {
        if (!amount || Number(amount) <= 0) {
            setInputError("Ange ett belopp som är större än 0.");
            return;
        }
    
        setInputError("");
        setIsLoading(true);
        setError("");

        try {
            const exchangeRate = await getExchangeRate("SEK", "EUR");
        
            setRate(exchangeRate);
        } catch (error) {
            setError("Kunde inte hämta växelkursen. Försök igen.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section>
            <h2>Valutakonverterare</h2>

            <label htmlFor="currency-amount">Belopp i SEK</label>

            <input
                id="currency-amount"
                type="number"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                placeholder="100"
            />

            {inputError && <p><b>{inputError}</b></p>}

            <button type="button" onClick={handleConvert} disabled={isLoading}>
                {isLoading ? "Hämtar..." : "Konvertera"}
            </button>

            {error && <p><b>{error}</b></p>}

            {rate && amount && (
                <p>
                    {amount} SEK = {(Number(amount) * rate).toFixed(2)} EUR
                </p>
            )}
        </section>
    );
}

export default CurrencyConverter;