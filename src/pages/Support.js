import "../css/Support.css";
import ContactForm from "../components/ContactForm";
import SupportVideo from "../components/SupportVideo";

const Support = () => {
  return (
    <main>
      <section className="support-hero">
        <div className="support-wrapper">
          <h1 className="support-title">Support</h1>
          <p className="support-sub">How can we assist you?</p>

          <div className="support-search" style={{ maxWidth: "1100px", width: "100%" }}>
            <input type="search" aria-label="Search FAQs" placeholder="Search FAQs" />
            <button aria-label="Search">Search</button>
          </div>

          <div className="contact-row">
            <div className="contact-card" role="button" tabIndex="0">
              <div className="contact-icon">☎</div>
              <div className="contact-body">
                <div className="contact-title">Call us anytime</div>
                <p className="contact-sub">+1 (800) 123-4567</p>
              </div>
            </div>

            <a href="mailto:support@trustpay.com" className="contact-card">
              <div className="contact-icon">@</div>
              <div className="contact-body">
                <div className="contact-title">Send us an email</div>
                <p className="contact-sub">support@trustpay.com</p>
              </div>
            </a>

            <a href="#" className="contact-card">
              <div className="contact-icon">💬</div>
              <div className="contact-body">
                <div className="contact-title">Start live chat</div>
                <p className="contact-sub">Chat with our support team</p>
              </div>
            </a>
          </div>

          <div className="help-list" aria-label="Help articles">
            <a className="help-item" href="#">
              <div className="help-left">
                <div className="help-icon">✓</div>
                <div>
                  <div className="help-title">Getting Started with TrustPay</div>
                  <div className="help-subtext">How to begin using your demo wallet</div>
                </div>
              </div>

              <div className="preview" aria-hidden="false">
                <h4>Getting Started — Preview</h4>
                <p>
                  Quick tour: view your simulated balance, explore sample transactions, and try a first lesson in Wallet — all with sample data, no real money involved.
                </p>
              </div>

              <div className="help-arrow">›</div>
            </a>

            <a className="help-item" href="#">
              <div className="help-left">
                <div className="help-icon">!</div>
                <div>
                  <div className="help-title">How to Report a Transaction Issue</div>
                  <div className="help-subtext">Step-by-step guide to flag a simulated transaction</div>
                </div>
              </div>
              <div className="help-arrow">›</div>
            </a>

            <a className="help-item" href="#">
              <div className="help-left">
                <div className="help-icon">🔒</div>
                <div>
                  <div className="help-title">Securing Your Account</div>
                  <div className="help-subtext">Best practices for demo accounts</div>
                </div>
              </div>
              <div className="help-arrow">›</div>
            </a>
          </div>

          <ContactForm />
          <SupportVideo />
        </div>
      </section>

      <a className="chat-cta" href="#" role="button" aria-label="Chat with us">
        Chat with us!
      </a>
    </main>
  );
};

export default Support;

