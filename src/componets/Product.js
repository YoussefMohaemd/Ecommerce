import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product details");
        }
        return res.json();
      })
      .then((json) => {
        if (Object.keys(json).length === 0) { // تحقق إذا كانت البيانات فارغة
          navigate("/notfound");
        } else {
          setProduct(json);
        }
      })
      .catch((err) => {
        setError(err.message);
        navigate("/notfound"); // في حالة حدوث خطأ، انتقل إلى صفحة Not Found
      })
      .finally(() => {
        setLoading(false); // إنهاء التحميل في النهاية
      });
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="loading-spinner" style={{ textAlign: "center", padding: "50px" }}>
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
      <div className="error-message" style={{ textAlign: "center", padding: "50px" }}>
        <h3>{error}</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img src={product.image} alt={product.title} style={{ width: '100%', height: '70vh', borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }} />
        </div>
        <div className="col-md-8">
          <h2 style={{ color: "#333" }}>{product.title}</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>{product.description}</p>
          <p style={{ color: "#007bff", fontSize: "1.2em" }}>Price: ${product.price}</p>
          <p>
            <span style={{ color: "#ffcc00" }}>Rating: {product.rating.rate} / 5</span>
            <span style={{ color: "#555" }}> ({product.rating.count} reviews)</span>
          </p>
          <button className="btn btn-success" style={{ borderRadius: "20px", padding: "10px 20px" }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
