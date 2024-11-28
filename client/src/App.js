import React, { useState, useEffect } from "react";
import {
  fetchReviews,
  createReview,
  updateReview,
  deleteReview,
} from "./services/reviews.js";
import ReviewList from "./ReviewList.js";
import "./App.css";

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [currentReview, setCurrentReview] = useState(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const { data } = await fetchReviews();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    loadReviews();
  }, []);

  const handleCreateOrUpdate = async (review) => {
    try {
      if (review._id) {
        const { data } = await updateReview(review._id, review);
        setReviews(reviews.map((r) => (r._id === review._id ? data : r)));
      } else {
        const { data } = await createReview(review);
        setReviews([...reviews, data]);
      }
      setCurrentReview(null);
    } catch (error) {
      console.error("Error saving review:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteReview(id);
      setReviews(reviews.filter((review) => review._id !== id));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div>
      <h1>Book Reviews</h1>
      <button
        onClick={() =>
          setCurrentReview({
            title: "",
            author: "",
            rating: "",
            reviewText: "",
          })
        }
      >
        Add Review
      </button>
      <ReviewList
        reviews={reviews}
        onEdit={(review) => setCurrentReview(review)}
        onDelete={handleDelete}
      />
      {currentReview && (
        <div>
          <h2>{currentReview._id ? "Edit Review" : "Add Review"}</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateOrUpdate(currentReview);
            }}
          >
            <input
              type="text"
              placeholder="Title"
              value={currentReview.title}
              onChange={(e) =>
                setCurrentReview({ ...currentReview, title: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Author"
              value={currentReview.author}
              onChange={(e) =>
                setCurrentReview({ ...currentReview, author: e.target.value })
              }
              required
            />
            <input
              type="number"
              placeholder="Rating"
              value={currentReview.rating}
              onChange={(e) =>
                setCurrentReview({ ...currentReview, rating: e.target.value })
              }
              min="1"
              max="5"
              required
            />
            <textarea
              placeholder="Review Text"
              value={currentReview.reviewText}
              onChange={(e) =>
                setCurrentReview({
                  ...currentReview,
                  reviewText: e.target.value,
                })
              }
              required
            />
            <button type="submit">
              {currentReview._id ? "Update" : "Create"} Review
            </button>
            <button onClick={() => setCurrentReview(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
