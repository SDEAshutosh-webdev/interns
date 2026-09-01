import React, { useState } from "react";
import "../../Styles/FaqAccordion.css";

const faqData = [
  {
    id: 1,
    question: "What are your delivery hours?",
    answer:
      "Our delivery service is available from 10:00 AM to 10:00 PM every day.",
  },
  {
    id: 2,
    question: "How can I track my order?",
    answer:
      "You can track your order from the Track Order section after placing your order.",
  },
  {
    id: 3,
    question: "What payment methods are supported?",
    answer:
      "We support UPI, Credit Card, Debit Card and Cash on Delivery.",
  },
  {
    id: 4,
    question: "How long does delivery take?",
    answer:
      "Normally, your order will be delivered within 25 to 45 minutes.",
  },
];

function FaqAccordion() {
  const [activeFaqId, setActiveFaqId] = useState(null);

  const handleFaqClick = (id) => {
    if (activeFaqId === id) {
      setActiveFaqId(null);
    } else {
      setActiveFaqId(id);
    }
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>

        <p className="faq-subtitle">
          Find answers to common questions about our food ordering service.
        </p>

        <div className="faq-list">
          {faqData.map((faq) => (
            <div className="faq-item" key={faq.id}>
              <button
                className="faq-question"
                onClick={() => handleFaqClick(faq.id)}
              >
                <span>{faq.question}</span>

                <span className="faq-icon">
                  {activeFaqId === faq.id ? "-" : "+"}
                </span>
              </button>

              {activeFaqId === faq.id && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqAccordion;