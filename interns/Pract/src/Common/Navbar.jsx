function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#333",
        color: "white",
      }}
    >
      <h2>MyLogo</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>
        <a href="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>
        <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
