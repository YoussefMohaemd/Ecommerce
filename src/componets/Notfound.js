import React from "react";

function Notfound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px",marginBottom:"60px" }}>
      <h1 style={{ fontSize: "3em", color: "#dc3545" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href="/" className="btn btn-primary" style={{ marginTop: "20px" }}>
        Go to Home
      </a>
    </div>
  );
}

export default Notfound;
