import "../css/Dialog.css";

const TransactionDetailsDialog = ({ transaction, closeDialog }) => {
  if (!transaction) return null;

  return (
    <div
      id="transaction-dialog"
      className="w3-modal"
      style={{ display: "block" }}
    >
      <div className="w3-modal-content transaction-modal-card">
        <div className="w3-container transaction-modal-body">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright transaction-modal-close"
            onClick={closeDialog}
          >
            &times;
          </span>

          <div className="transaction-modal-top">
            <p className="transaction-modal-label">Transaction Details</p>
            <h3 className="transaction-modal-title">{transaction.merchant}</h3>
          </div>

          <div id="transaction-dialog-content">
            <div className="transaction-detail-row">
              <span>Date</span>
              <strong>{transaction.date}</strong>
            </div>

            <div className="transaction-detail-row">
              <span>Category</span>
              <strong>{transaction.category}</strong>
            </div>

            <div className="transaction-detail-row">
              <span>Amount</span>
              <strong className={transaction.amount > 0 ? "positive" : "negative"}>
                {(transaction.amount > 0 ? "+" : "") +
                  "$" +
                  Math.abs(transaction.amount).toFixed(2)}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetailsDialog;