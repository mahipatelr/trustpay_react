const Transaction = ({ transaction, onClick }) => {
  if (!transaction || typeof transaction.amount === "undefined") return null;

  const amountClass =
    transaction.amount > 0 ? "positive" : "negative";

  const formattedAmount =
    (transaction.amount > 0 ? "+" : "") +
    "$" +
    Math.abs(transaction.amount).toFixed(2);

  return (
    <tr onClick={() => onClick(transaction)} style={{ cursor: "pointer" }}>
      <td>{transaction.date}</td>
      <td>{transaction.merchant}</td>
      <td>{transaction.category}</td>
      <td className={`amount ${amountClass}`}>
        {formattedAmount}
      </td>
    </tr>
  );
};

export default Transaction;