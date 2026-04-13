import { useEffect, useState } from "react";
import "../css/Transactions.css";
import TransactionDetailsDialog from "../components/TransactionDetailsDialog";
import TransactionForm from "../components/TransactionForm";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetch("https://demo-backend-1-bo10.onrender.com/api/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  const handleClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  return (
    <main className="transactions-page">
      <section className="transactions-hero">
        <div className="transactions-wrapper">
          <div className="transactions-header">
            <h1 className="transactions-title">Transactions Overview</h1>
            <p className="transactions-sub">
              Simulated transactions used for demo and learning
            </p>
          </div>

          <TransactionForm
            onAddTransaction={handleAddTransaction}
            setSuccessMessage={setSuccessMessage}
          />

          {successMessage && <p className="success-message">{successMessage}</p>}

          <div className="transactions-table-shell">
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Merchant</th>
                  <th>Category</th>
                  <th className="amount">Amount</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((t) => (
                  <tr key={t._id} onClick={() => handleClick(t)}>
                    <td>{t.date}</td>
                    <td>{t.merchant}</td>
                    <td>{t.category}</td>
                    <td className={t.amount > 0 ? "positive" : "negative"}>
                      {(t.amount > 0 ? "+" : "") +
                        "$" +
                        Math.abs(t.amount).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {selectedTransaction && (
        <TransactionDetailsDialog
          closeDialog={() => setSelectedTransaction(null)}
          transaction={selectedTransaction}
        />
      )}
    </main>
  );
};

export default Transactions;