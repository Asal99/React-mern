import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const DetailPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJson = async () => {
      try {
        const res = await fetch("/ProductJson.json");
        const data = await res.json();
        setProducts(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJson();
  }, []);

  const product = products.find((item) => item._id === Number(id));

  if (loading) return <h2>Loading...</h2>;
  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ display: "flex", gap: "40px", padding: "40px" }}>
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "400px", objectFit: "cover" }}
      />

      {/* Details */}
      <div>
        <h1>{product.title}</h1>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>{product.description}</p>

        <h3>NPR {product.price}</h3>

        <p>
          <strong>Sizes:</strong> {product.size.join(", ")}
        </p>

        <button style={{ padding: "10px 20px" }}>Add to Cart</button>
      </div>
    </div>
  );
};
