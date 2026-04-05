import Transaction from "./Transaction";

const TransactionList = ({ transactions, onRowClick }) => {
  if (!transactions || transactions.length === 0) return null;

  return (
    <tbody>
      {transactions.map((t) => (
        <Transaction
          key={t._id}
          transaction={t}
          onClick={onRowClick}
        />
      ))}
    </tbody>
  );
};

export default TransactionList;