import { useState } from "react";
import { getBook } from "../services/bookService";
import BookCard from "../components/BookCard";

function Book() {
  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchBookHandler = () => {
    setLoading(true);

    getBook()
      .then((data) => {
        setBook({
          title: data.title,
          author: "John Doe",
          price: 499,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Axios error:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Book Page</h2>

      {loading && <p>Loading book...</p>}

      <BookCard
        title={book?.title}
        author={book?.author}
        price={book?.price}
        onFetch={fetchBookHandler}
      />
    </div>
  );
}

export default Book;
