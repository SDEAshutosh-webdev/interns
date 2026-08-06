function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <img 
        src="/images/shopping.jpg" 
        alt="Online Shopping" 
        style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '8px' }} 
      />

      <p>
        Welcome to our Online Shopping Website. We provide quality products
        at affordable prices with a safe and easy shopping experience.
      </p>

      <h2>Our Mission</h2>
      <p>
        To provide customers with the best products, fast delivery, and
        excellent customer service.
      </p>

      <h2>Why Choose Us?</h2>
     
      <div className="features-grid" style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
        <div className="feature-card">
          <img src="/images/quality.jpg" alt="Quality Products" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
          <h3>Quality Products</h3>
        </div>

        <div className="feature-card">
          <img src="/images/delivery.jpg" alt="Fast Delivery" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
          <h3>Fast Delivery</h3>
        </div>
      </div>

      <ul>
        <li>Quality Products</li>
        <li>Affordable Prices</li>
        <li>Fast Delivery</li>
        <li>Secure Payments</li>
        <li>24/7 Customer Support</li>
      </ul>
    </div>
  );
}

export default About;