import { Link } from "react-router-dom";
import "../css/Learn.css";

import gettingStartedImg from "../images/getting-started.png";
import budgetingImg from "../images/budgeting.png";
import transactionImg from "../images/transaction.png";
import beginnerBadge from "../images/badge-beginner.png";
import intermediateBadge from "../images/badge-intermediate.png";

const Learn = () => {
  return (
    <main>
      <section className="learn-hero">
        <div className="learn-wrapper container">
          <h1 className="learn-title">Learn with TrustPay</h1>
          <p className="learn-sub">
            Improve your financial literacy with our interactive lessons.
          </p>

          <div className="lesson-grid">
            <div className="lesson-card">
              <img src={gettingStartedImg} alt="Getting Started" />
              <h4>Getting Started</h4>
              <p>Understand wallet basics and set your first goals.</p>
              <Link className="btn primary" to="/wallet">
                Open
              </Link>
            </div>

            <div className="lesson-card">
              <img src={budgetingImg} alt="Budgeting Basics" />
              <h4>Budgeting Basics</h4>
              <p>Learn how to make a simple, realistic budget you can keep.</p>
              <Link className="btn primary" to="/transactions">
                Open
              </Link>
            </div>

            <div className="lesson-card">
              <img src={transactionImg} alt="Transaction" />
              <h4>Transaction</h4>
              <p>Explore how transactions affect your balance and spending.</p>
              <Link className="btn primary" to="/transactions">
                Open
              </Link>
            </div>
          </div>

          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <button id="addToGallery" className="btn outline add-gallery">
              Add a Lesson to Gallery
            </button>
          </div>

          <div className="check-columns">
            <div className="check-card">
              <h3>Getting Started</h3>
              <ul className="check-list">
                <li><span className="dot"></span> Understanding Wallet Basics</li>
                <li><span className="dot"></span> Setting Financial Goals</li>
              </ul>
              <div className="check-actions">
                <Link className="btn primary" to="/wallet">
                  Continue
                </Link>
              </div>
            </div>

            <div className="check-card">
              <h3>Budgeting Basics</h3>
              <ul className="check-list">
                <li><span className="dot"></span> Creating a Budget</li>
                <li><span className="dot"></span> Expense Tracking</li>
              </ul>
              <div className="check-actions">
                <Link className="btn primary" to="/transactions">
                  Continue
                </Link>
              </div>
            </div>
          </div>

          <div className="progress-section">
            <h3>Progress Tracker</h3>

            <div className="progress-list">
              <div className="progress-row">
                <img src={beginnerBadge} className="small-badge" alt="Beginner" />
                <div className="progress-body">
                  <div className="progress-info">Beginner Level</div>
                  <div className="progress-sub">45 / 75 points</div>
                </div>
              </div>

              <div className="progress-row">
                <img
                  src={intermediateBadge}
                  className="small-badge"
                  alt="Intermediate"
                />
                <div className="progress-body">
                  <div className="progress-info">Intermediate</div>
                  <div className="progress-sub">
                    Locked — complete Beginner level to unlock
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Learn;

