import { useState } from "react";

const TransactionForm = ({ onAddTransaction, setSuccessMessage }) => {
  const [date, setDate] = useState("");
  const [merchant, setMerchant] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({});

  const getDateKey = (dateString) => {
    const match = String(dateString).trim().match(/^(\d{1,2})\/(\d{1,2})$/);
    if (!match) return 0;

    const month = String(match[1]).padStart(2, "0");
    const day = String(match[2]).padStart(2, "0");
    return Number(`${month}${day}`);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!date.trim()) newErrors.date = "Date is required";
    if (!merchant.trim()) newErrors.merchant = "Merchant is required";
    if (!category.trim()) newErrors.category = "Category is required";
    if (amount === "" || isNaN(amount)) newErrors.amount = "Amount must be a number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const dateKey = getDateKey(date);

    try {
      const response = await fetch("https://demo-backend-1-bo10.onrender.com/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date,
          dateKey, // ✅ THIS FIXES YOUR ERROR
          merchant,
          category,
          amount: Number(amount),
        }),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message);
      }

      const newTransaction = await response.json();
      onAddTransaction(newTransaction);
      setSuccessMessage("Transaction added successfully!");

      setDate("");
      setMerchant("");
      setCategory("");
      setAmount("");
      setErrors({});
    } catch (error) {
      setSuccessMessage("");
      alert(error.message);
    }
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <div className="form-title-wrap">
        <h2 className="form-title">Add a Transaction</h2>
        <p className="form-subtitle">Post new data to the server</p>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label>Date</label>
          <input value={date} onChange={(e) => setDate(e.target.value)} placeholder="04/25" />
          {errors.date && <p className="form-error">{errors.date}</p>}
        </div>

        <div className="form-field">
          <label>Merchant</label>
          <input value={merchant} onChange={(e) => setMerchant(e.target.value)} />
          {errors.merchant && <p className="form-error">{errors.merchant}</p>}
        </div>

        <div className="form-field">
          <label>Category</label>
          <input value={category} onChange={(e) => setCategory(e.target.value)} />
          {errors.category && <p className="form-error">{errors.category}</p>}
        </div>

        <div className="form-field">
          <label>Amount</label>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} />
          {errors.amount && <p className="form-error">{errors.amount}</p>}
        </div>
      </div>

      <button className="form-button" type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;