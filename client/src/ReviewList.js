import React from "react";

const ReviewList = ({ reviews, onEdit, onDelete }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review._id}>
          <h3>{review.title}</h3>
          <p>Author: {review.author}</p>
          <p>Rating: {review.rating} Stars</p>
          <p>{review.reviewText}</p>
          <p>
            <strong>Date Added:</strong>{" "}
            {new Date(review.dateAdded).toLocaleDateString()}
          </p>
          <button onClick={() => onEdit(review)}>Edit</button>
          <button onClick={() => onDelete(review._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
