import "../css/Transactions.css";

const Transactions = () => {
  return (
    <main>
      <section className="transactions-hero">
        <div className="transactions-wrapper">
          <h1 className="transactions-title">Transactions Overview</h1>
          <p className="transactions-sub">
            Simulated transactions used for demo and learning
          </p>

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
              <tr>
                <td>04/23</td>
                <td>Coffee Shop</td>
                <td>Food</td>
                <td className="amount negative">-$4.00</td>
              </tr>

              <tr>
                <td>04/22</td>
                <td>Grocery Store</td>
                <td>Shopping</td>
                <td className="amount negative">-$38.20</td>
              </tr>

              <tr>
                <td>04/21</td>
                <td>Public Transit</td>
                <td>Transport</td>
                <td className="amount negative">-$2.50</td>
              </tr>

              <tr>
                <td>04/19</td>
                <td>Paycheck</td>
                <td>Income</td>
                <td className="amount positive">+$500.00</td>
              </tr>

              <tr>
                <td>04/18</td>
                <td>Gas Station</td>
                <td>Transport</td>
                <td className="amount negative">-$42.75</td>
              </tr>

              <tr>
                <td>04/17</td>
                <td>Food Delivery</td>
                <td>Food</td>
                <td className="amount negative">-$12.32</td>
              </tr>

              <tr>
                <td>04/16</td>
                <td>Online Store</td>
                <td>Shopping</td>
                <td className="amount negative">-$89.99</td>
              </tr>

              <tr>
                <td>04/15</td>
                <td>Streaming Service</td>
                <td>Entertainment</td>
                <td className="amount negative">-$14.99</td>
              </tr>

              <tr>
                <td>04/14</td>
                <td>Gym Membership</td>
                <td>Health</td>
                <td className="amount negative">-$35.00</td>
              </tr>

              <tr>
                <td>04/12</td>
                <td>Credit Card Payment</td>
                <td>Payments</td>
                <td className="amount negative">-$800.00</td>
              </tr>

              <tr>
                <td>04/10</td>
                <td>Bookstore</td>
                <td>Shopping</td>
                <td className="amount negative">-$22.40</td>
              </tr>

              <tr>
                <td>04/08</td>
                <td>Restaurant</td>
                <td>Food</td>
                <td className="amount negative">-$46.75</td>
              </tr>

              <tr>
                <td>04/06</td>
                <td>Electric Bill</td>
                <td>Utilities</td>
                <td className="amount negative">-$120.00</td>
              </tr>

              <tr>
                <td>04/05</td>
                <td>Freelance Payment</td>
                <td>Income</td>
                <td className="amount positive">+$320.00</td>
              </tr>

              <tr>
                <td>04/02</td>
                <td>Pharmacy</td>
                <td>Health</td>
                <td className="amount negative">-$18.65</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Transactions;

