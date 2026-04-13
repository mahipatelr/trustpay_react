import { useEffect, useState } from "react";
import "../css/Transactions.css";
import TransactionDetailsDialog from "../components/TransactionDetailsDialog";
import TransactionForm from "../components/TransactionForm";

const getDateKey = (dateString) => {
  const match = String(dateString).trim().match(/^(\d{1,2})\/(\d{1,2})$/);
  if (!match) return 0;

  const month = String(match[1]).padStart(2, "0");
  const day = String(match[2]).padStart(2, "0");
  return Number(`${month}${day}`);
};

const sortByDateDesc = (transactions) => {
  return [...transactions].sort((a, b) => {
    const aKey = a.dateKey ?? getDateKey(a.date);
    const bKey = b.dateKey ?? getDateKey(b.date);
    return bKey - aKey;
  });
};

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetch("https://demo-backend-1-bo10.onrender.com/api/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(sortByDateDesc(data)))
      .catch((err) => console.error(err));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prevTransactions) =>
      sortByDateDesc([...prevTransactions, newTransaction])
    );
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
                {sortByDateDesc(transactions).map((t) => (
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