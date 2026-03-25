import { useEffect, useState } from "react";
import "../css/Wallet.css";

import walletGraph from "../images/wallet-graph.png";
import donutImg from "../images/donut.png";

const Wallet = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const target = 5420.0;
    const duration = 1100;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = target * progress;

      setBalance(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <main>
      <section className="wallet-hero">
        <div className="container wallet-hero-inner">
          <h1 className="wallet-title">Wallet Overview</h1>
          <p className="wallet-sub">Simulated balance and activity</p>

          <div className="wallet-cta-row-centered">
            <span className="cta-pill-long">SIMULATED BALANCE</span>
            <div className="wallet-large-balance-centered" aria-live="polite">
              {balance.toLocaleString(undefined, {
                style: "currency",
                currency: "USD",
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="wallet-main container">
        <div className="wallet-section">
          <h3 className="section-subtitle">Current Balance</h3>

          <div className="chart-card">
            <div className="chart-title">Balance chart</div>

            <img
              src={walletGraph}
              alt="Balance chart"
              className="chart-img"
            />

            <div className="chart-balance-overlay" aria-hidden="false">
              {balance.toLocaleString(undefined, {
                style: "currency",
                currency: "USD",
              })}
            </div>

            <div className="chart-note">No real money involved</div>
          </div>
        </div>

        <div className="wallet-section">
          <h3 className="section-subtitle">Spending Breakdown</h3>

          <div className="spend-block">
            <div className="donut-wrap">
              <img src={donutImg} alt="Spending donut" className="donut-img" />
            </div>

            <ul className="spend-legend">
              <li>
                <span>
                  <span className="legend-dot dot-food"></span>Food
                </span>
                <span className="legend-value">42%</span>
              </li>
              <li>
                <span>
                  <span className="legend-dot dot-shopping"></span>Shopping
                </span>
                <span className="legend-value">28%</span>
              </li>
              <li>
                <span>
                  <span className="legend-dot dot-travel"></span>Travel
                </span>
                <span className="legend-value">16%</span>
              </li>
              <li>
                <span>
                  <span className="legend-dot dot-other"></span>Other
                </span>
                <span className="legend-value">14%</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Wallet;

