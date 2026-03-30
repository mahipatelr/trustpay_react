import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Learn.css";

import gettingStartedImg from "../images/getting-started.png";
import budgetingImg from "../images/budgeting.png";
import transactionImg from "../images/transaction.png";
import beginnerBadge from "../images/badge-beginner.png";
import intermediateBadge from "../images/badge-intermediate.png";

const initialLessons = [
  {
    id: 1,
    title: "Getting Started",
    desc: "Understand wallet basics and set your first goals.",
    img: gettingStartedImg,
    link: "/wallet",
  },
  {
    id: 2,
    title: "Budgeting Basics",
    desc: "Learn how to make a simple, realistic budget you can keep.",
    img: budgetingImg,
    link: "/transactions",
  },
  {
    id: 3,
    title: "Transaction",
    desc: "Explore how transactions affect your balance and spending.",
    img: transactionImg,
    link: "/transactions",
  },
];

const Learn = () => {
  const [lessons, setLessons] = useState(initialLessons);

  const addLesson = () => {
    const title = window.prompt("Enter lesson name:");
    if (!title) return;

    const description = window.prompt("Enter lesson description:");
    if (!description) return;

    const newLesson = {
      id: Date.now(),
      title,
      desc: description,
      img: budgetingImg, // you can change this later if you want custom images
      link: "/wallet",
    };

    setLessons((prev) => [...prev, newLesson]);
  };

  return (
    <main>
      <section className="learn-hero">
        <div className="learn-wrapper container">
          <h1 className="learn-title">Learn with TrustPay</h1>
          <p className="learn-sub">
            Improve your financial literacy with our interactive lessons.
          </p>

          {/* Lesson Cards */}
          <div className="lesson-grid">
            {lessons.map((lesson) => (
              <div className="lesson-card" key={lesson.id}>
                <img src={lesson.img} alt={lesson.title} />
                <h4>{lesson.title}</h4>
                <p>{lesson.desc}</p>
                <Link className="btn primary" to={lesson.link}>
                  Open
                </Link>
              </div>
            ))}
          </div>

          {/* Add Lesson Button */}
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <button
              id="addToGallery"
              className="btn outline add-gallery"
              type="button"
              onClick={addLesson}
            >
              Add a Lesson to Gallery
            </button>
          </div>

          {/* Check Sections */}
          <div className="check-columns">
            <div className="check-card">
              <h3>Getting Started</h3>
              <ul className="check-list">
                <li>
                  <span className="dot"></span> Understanding Wallet Basics
                </li>
                <li>
                  <span className="dot"></span> Setting Financial Goals
                </li>
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
                <li>
                  <span className="dot"></span> Creating a Budget
                </li>
                <li>
                  <span className="dot"></span> Expense Tracking
                </li>
              </ul>
              <div className="check-actions">
                <Link className="btn primary" to="/transactions">
                  Continue
                </Link>
              </div>
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="progress-section">
            <h3>Progress Tracker</h3>

            <div className="progress-list">
              <div className="progress-row">
                <img
                  src={beginnerBadge}
                  className="small-badge"
                  alt="Beginner"
                />
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