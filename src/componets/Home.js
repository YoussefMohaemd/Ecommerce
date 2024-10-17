import React, { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((json) => {
        // Simulate delay for better UX
        setTimeout(() => {
          setProducts(json);
          setLoading(false);
        }, 1500); // 1.5 seconds delay for loading effect
      })
      .catch((err) => {
        setTimeout(() => {
          setError(err.message);
          setLoading(false);
        }, 3000); // 3 seconds delay for error handling
      });
  }, []);

  if (loading) {
    return (
      <div
        className="loading-spinner"
        style={{ textAlign: "center", padding: "50px" }}
      >
        <div className="wrapper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
      </div>
    );
  }
  

  if (error) {
    return (
      <div
        className="error-message"
        style={{ textAlign: "center", padding: "50px" }}
      >
        <h3>{error}</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4 d-flex">
            <div
              className="card flex-fill"
              style={{
                backgroundColor: "#f9f9f9",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{
                  height: "300px",
                  objectFit: "contain",
                  padding: "20px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#333" }}>
                  {product.title}
                </h5>
                <p className="card-text" style={{ color: "#555" }}>
                  ${product.price}
                </p>
                <div className="rating mb-2">
                  {Array(Math.round(product.rating.rate))
                    .fill()
                    .map((_, i) => (
                      <i key={i} className="fa fa-star text-warning"></i>
                    ))}
                  {Array(5 - Math.round(product.rating.rate))
                    .fill()
                    .map((_, i) => (
                      <i key={i} className="fa fa-star text-secondary"></i>
                    ))}
                  <span> ({product.rating.count} reviews)</span>
                </div>
                <a
                  href={`/product/${product.id}`}
                  className="btn btn-primary"
                  style={{ borderRadius: "20px" }}
                >
                  View Product
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
