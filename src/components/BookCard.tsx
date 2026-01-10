type BookProps = {
  title: string;
  author: string;
  price: number;
  onFetch: () => void;
};

function BookCard({ title, author, price, onFetch }: BookProps) {
  return (
    <div style={{ border: "1px solid gray", padding: "16px", width: "280px" }}>
      <h3>{title || "No Book Loaded"}</h3>
      <p>Author: {author || "-"}</p>
      <p>Price: {price ? `₹${price}` : "-"}</p>

      <button onClick={onFetch} style={{ marginTop: "10px" }}>
        Fetch Book Info
      </button>
    </div>
  );
}

export default BookCard;
