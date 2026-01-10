import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import type { RootState } from "../app/store";


function ProductCardRedux() {
  const dispatch = useDispatch();
  const cartCount = useSelector((state: RootState) => state.cart.count);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🖼️ Redux Product Card</h2>
      <p>🛒 Cart Items: {cartCount}</p>

      <div
        style={{
          width: "260px",
          margin: "auto",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Product"
          style={{ width: "100%", borderRadius: "8px" }}
        />

        <h3>Smart Watch</h3>
        <p>Price: ₹1999</p>

        <button
          onClick={() => dispatch(addToCart())}
          style={{
            padding: "8px 12px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCardRedux;
