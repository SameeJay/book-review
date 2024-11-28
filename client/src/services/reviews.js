import axios from "axios";

const BASE_URL = "http://localhost:5000"; // Backend URL

export const fetchReviews = () => axios.get(`${BASE_URL}/reviews`);
export const createReview = (review) =>
  axios.post(`${BASE_URL}/reviews`, review);
export const updateReview = (id, review) =>
  axios.put(`${BASE_URL}/reviews/${id}`, review);
export const deleteReview = (id) => axios.delete(`${BASE_URL}/reviews/${id}`);
