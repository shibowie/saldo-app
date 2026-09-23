async function getExchangeRate(from, to) {
    const response = await fetch(
        `https://api.frankfurter.dev/v2/rate/${from}/${to}`
    );

    if (!response.ok) {
        throw new Error("Kunde inte hämta växelkurs.");
    }

    const data = await response.json();

    return data.rate;
}

export default getExchangeRate;