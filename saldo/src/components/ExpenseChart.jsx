import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { useTransactions } from "../context/TransactionsContext";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart() {
    const { transactions } = useTransactions();

    const expenses = transactions.filter(
        (transaction) => transaction.type === "expense"
    );

    if (expenses.length === 0) {
        return (
            <section className="expense-chart">
                <h2>Utgifter per kategori</h2>
                <p>Inga utgifter att visa ännu.</p>
            </section>
        );
    }

    const categoryTotals = expenses.reduce((acc, transaction) => {
        if (!acc[transaction.category]) {
            acc[transaction.category] = 0;
        }

        acc[transaction.category] += transaction.amount;

        return acc;
    }, {});

    function getChartColors() {
        const styles = getComputedStyle(document.documentElement);

        return {
            Boende: styles.getPropertyValue("--chart-housing").trim(),
            Mat: styles.getPropertyValue("--chart-food").trim(),
            Transport: styles.getPropertyValue("--chart-transport").trim(),
            Nöje: styles.getPropertyValue("--chart-entertainment").trim(),
            Shopping: styles.getPropertyValue("--chart-shopping").trim(),
            Hälsa: styles.getPropertyValue("--chart-health").trim(),
            Övrigt: styles.getPropertyValue("--chart-other").trim(),
        };
    }

    const chartColors = getChartColors();

    const data = {
        labels: Object.keys(categoryTotals),
        datasets: [
            {
                data: Object.values(categoryTotals),
                backgroundColor: Object.keys(categoryTotals).map(
                    (category) => chartColors[category]
                ),
            },
        ],
    };

    return (
        <section className="expense-chart">
            <h2>Utgifter per kategori</h2>
            <Doughnut data={data} />
        </section>
    );
}

export default ExpenseChart;