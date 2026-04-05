import "../css/Dialog.css";

const TransactionDetailsDialog = ({ transaction, closeDialog }) => {
  if (!transaction) return null;

  return (
    <div id="transaction-dialog" className="w3-modal" style={{ display: "block" }}>
      <div className="w3-modal-content">
        <div className="w3-container">

          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={closeDialog}
          >
            &times;
          </span>

          <div id="transaction-dialog-content">
            <h3>{transaction.merchant}</h3>
            <p>Date: {transaction.date}</p>
            <p>Category: {transaction.category}</p>
            <p>
              Amount:{" "}
              {(transaction.amount > 0 ? "+" : "") +
                "$" +
                Math.abs(transaction.amount).toFixed(2)}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TransactionDetailsDialog;