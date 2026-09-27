# Saldo

Saldo is a personal budget application built with React. The app allows users to keep track of their income and expenses, manage transactions, and get an overview of their spending.

## Features

- Add income and expenses
- Edit existing transactions
- Delete transactions
- Filter transactions by type
- Sort transactions by date or amount
- View recent transactions on the dashboard
- View expenses grouped by category
- Visualize expenses with a doughnut chart
- Convert SEK to EUR using an external API
- Loading and error states for API requests
- Form validation with accessible error messages
- Persistent data using localStorage
- Theme selector with Soft, Neon and Dark themes
- Responsive layout for different screen sizes
- Empty states when there is no data to display

## Technologies

- React
- JavaScript
- React Router
- Chart.js
- react-chartjs-2
- CSS
- Vite
- localStorage

## External API

Saldo uses the [Frankfurter API](https://www.frankfurter.app/) to retrieve the current exchange rate between SEK and EUR.

The currency converter includes loading and error handling to provide feedback if the request fails.

## Project Structure

```text
src/
├── components/
│   ├── CategoryOverview.jsx
│   ├── CurrencyConverter.jsx
│   ├── ExpenseChart.jsx
│   ├── Header.jsx
│   ├── SummaryCards.jsx
│   ├── TransactionForm.jsx
│   ├── TransactionItem.jsx
│   └── TransactionList.jsx
├── context/
│   └── TransactionsContext.jsx
├── data/
│   └── categories.js
├── hooks/
│   ├── useLocalStorage.js
│   └── useTransactions.js
├── pages/
│   ├── Dashboard.jsx
│   ├── Overview.jsx
│   └── Transactions.jsx
├── services/
│   └── currencyApi.js
├── App.jsx
├── index.css
└── main.jsx
Getting Started
Prerequisites

Make sure you have Node.js and npm installed.

Installation

Clone the repository:

git clone https://github.com/shibwow/saldo-app.git

Navigate to the project folder:

cd saldo-app/saldo

Install dependencies:

npm install

Start the development server:

npm run dev

The application will then be available at the local address shown in the terminal.

Available Views
/ – Dashboard with balance, category overview, currency converter and recent transactions
/overview – Overview of expenses with a doughnut chart
/transactions – Full transaction list with filtering, sorting, editing and deletion
State Management

Transaction data is shared across the application using React Context. Local component state is used for things such as form fields, validation errors, filters and sorting.

Transactions and the selected theme are persisted using localStorage.

Accessibility

The application includes accessibility considerations such as:

Semantic HTML
Labels associated with form controls
Accessible form error messages
aria-invalid and aria-describedby where appropriate
Visible keyboard focus states
Reduced-motion support for animations
Responsive layout