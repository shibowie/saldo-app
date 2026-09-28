## Live Demo

[Open Saldo](https://saldo-app-three.vercel.app/)

# Saldo

Saldo is a personal budget application built with React. The app allows users to keep track of income and expenses, manage transactions, and get an overview of their spending.

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

Saldo uses the Frankfurter API to retrieve the exchange rate between SEK and EUR.

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
│   └── useLocalStorage.js
├── pages/
│   ├── Dashboard.jsx
│   ├── Overview.jsx
│   └── Transactions.jsx
├── services/
│   └── currencyApi.js
├── App.jsx
├── index.css
└── main.jsx
Routing

The application uses React Router for navigation between three views:

/ – Dashboard
/overview – Expense overview with a doughnut chart
/transactions – Transaction management

Navigation is handled with React Router without reloading the page.

State Management

Transaction data is shared across the application using React Context.

Several components use the shared transaction state, including the transaction form, transaction list, dashboard summary, category overview and expense chart.

Local component state is used for things such as form fields, validation errors, filters and sorting.

Persistence

Transactions and the selected theme are persisted using localStorage, allowing the data to remain available between page reloads.

The useLocalStorage custom hook is used to handle persistent state.

Error Handling and Empty States

The application includes extended error handling and empty states.

Examples include:

API error messages when the currency API request fails
Loading feedback while retrieving exchange rates
An empty state when there are no transactions matching the selected filter
An empty state when there are no expenses to display in the expense chart
Form validation errors for invalid or missing input
Responsive Design

The application is responsive and adapts its layout to smaller screen sizes.

The navigation, transaction list, forms, cards and dashboard layout have dedicated responsive styling for mobile devices.

Extended Functionality

In addition to the core requirements, Saldo includes:

Transaction filtering
Transaction sorting
Transaction editing
Transaction deletion
Expense visualization with Chart.js
Multiple visual themes
Currency conversion
Recent transaction overview

These features were implemented to make the budget application more useful and interactive.

Accessibility

The application includes accessibility considerations such as:

Semantic HTML
Labels associated with form controls
Accessible form error messages
aria-invalid and aria-describedby where appropriate
Visible keyboard focus states
Reduced-motion support for animations
Responsive layout
Code Quality

The project uses a component-based structure with separate folders for components, pages, hooks, services, context and data.

Reusable logic is separated into custom hooks and services where appropriate, while presentation and shared application state are kept separate.

The project is version controlled with Git and has been developed using multiple descriptive commits throughout the project.

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