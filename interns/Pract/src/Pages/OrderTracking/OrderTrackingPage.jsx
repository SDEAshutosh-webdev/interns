import React from "react";
import "../../Styles/OrderTrackingPage.css";

const order = {
  orderId: "FOOD12345",
  status: "out_for_delivery",
  estimatedTime: 25,
};

const steps = [
  {
    id: "order_received",
    label: "Order Received",
    description: "Your order has been received",
    icon: "📝",
  },
  {
    id: "preparing_food",
    label: "Preparing Food",
    description: "The restaurant is preparing your food",
    icon: "👨‍🍳",
  },
  {
    id: "out_for_delivery",
    label: "Out for Delivery",
    description: "Your delivery partner is on the way",
    icon: "🛵",
  },
  {
    id: "delivered",
    label: "Delivered",
    description: "Enjoy your delicious meal!",
    icon: "🍽️",
  },
];

function OrderTrackingPage() {
  const currentStepIndex = steps.findIndex(
    (step) => step.id === order.status
  );

  return (
    <div className="order-tracking-page">

      {/* Header */}
      <div className="tracking-header">
        <p className="tracking-subtitle">ORDER TRACKING</p>

        <h1>Track Your Order</h1>

        <p className="tracking-order-id">
          Order #{order.orderId}
        </p>
      </div>

      {/* Current Status Card */}
      <div className="status-card">

        <div className="status-icon">
          🛵
        </div>

        <div className="status-content">
          <span className="status-label">
            CURRENT STATUS
          </span>

          <h2>Your food is on the way!</h2>

          <p>
            Out for Delivery
          </p>
        </div>

        <div className="delivery-time">
          <span>ARRIVING IN</span>

          <strong>
            {order.estimatedTime} min
          </strong>
        </div>

      </div>

      {/* Timeline */}
      <div className="tracking-card">

        <h3>Order Status</h3>

        <div className="tracking-timeline">

          {steps.map((step, index) => {

            const isCompleted =
              index < currentStepIndex;

            const isCurrent =
              index === currentStepIndex;

            return (
              <div
                key={step.id}
                className={`tracking-step ${
                  isCompleted
                    ? "completed"
                    : isCurrent
                    ? "current"
                    : "pending"
                }`}
              >

                {/* Circle */}
                <div className="step-icon">

                  {isCompleted
                    ? "✓"
                    : step.icon}

                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="timeline-line"></div>
                )}

                {/* Text */}
                <div className="step-content">

                  <div className="step-title-row">

                    <h4>{step.label}</h4>

                    {isCurrent && (
                      <span className="current-badge">
                        CURRENT
                      </span>
                    )}

                  </div>

                  <p>
                    {step.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Bottom Info */}
      <div className="delivery-info">

        <div>
          <span>📦</span>

          <div>
            <strong>Order Status</strong>
            <p>On the way to you</p>
          </div>
        </div>

        <div>
          <span>⏱️</span>

          <div>
            <strong>Estimated Delivery</strong>
            <p>{order.estimatedTime} minutes</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default OrderTrackingPage;