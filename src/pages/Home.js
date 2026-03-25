import { Link } from "react-router-dom";
import "../css/Home.css";

import heroImg from "../images/hero.png";
import feature1 from "../images/feature1.png";
import feature2 from "../images/feature2.png";
import feature3 from "../images/feature3.png";
import feature4 from "../images/feature4.png";
import moneyIcon from "../images/money.png";
import dataIcon from "../images/data.png";
import classroomIcon from "../images/classroom.png";
import bannerImg from "../images/banner.png";

const Home = () => {
  return (
    <main id="home" className="main-content">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>
              Understand your money —
              <span className="accent">without using real money.</span>
            </h1>

            <p className="lead">
              Practice with sample data, visualize transactions, and learn financial concepts in a safe classroom demo.
            </p>

            <div className="hero-cta">
              <Link className="btn primary" to="/wallet">
                Try the Demo
              </Link>

              <Link className="btn outline" to="/transactions">
                View Sample Transactions
              </Link>
            </div>
          </div>

          <div className="hero-media">
            <img src={heroImg} alt="Product illustration" />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">What can you learn with TrustPay</h2>

          <div className="feature-grid">
            <Link to="/wallet" className="feature-link">
              <article className="feature">
                <img src={feature1} alt="Clear Balances" className="feature-img" />
                <h3>Clear Balances</h3>
                <p>Track how balances change after each transaction.</p>
              </article>
            </Link>

            <Link to="/transactions" className="feature-link">
              <article className="feature">
                <img src={feature2} alt="Transaction Explorer" className="feature-img" />
                <h3>Transaction Explorer</h3>
                <p>Browse and inspect simulated payments.</p>
              </article>
            </Link>

            <article className="feature">
              <img src={feature3} alt="Spending Insights" className="feature-img" />
              <h3>Spending Insights</h3>
              <p>Visualize patterns and trends.</p>
            </article>

            <article className="feature">
              <img src={feature4} alt="Safe Demo Mode" className="feature-img" />
              <h3>Safe Demo Mode</h3>
              <p>Learn without real money or risk.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container banner-inner">
          <div className="banner-text">
            <h2>Designed for learning, not real banking</h2>

            <ul className="banner-list">
              <li>
                <img src={moneyIcon} className="bullet-icon" alt="" />
                No real money required
              </li>
              <li>
                <img src={dataIcon} className="bullet-icon" alt="" />
                Practice with sample data
              </li>
              <li>
                <img src={classroomIcon} className="bullet-icon" alt="" />
                Classroom friendly interface
              </li>
            </ul>
          </div>

          <div className="banner-media">
            <img src={bannerImg} alt="Demo illustration" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

