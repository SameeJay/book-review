Clone the Repository

Backend Setup
  Navigate to the "server" directory.
  Install dependencies
  Create a .env file in the "server" directory
  Add the following environment variables to .env 
  (PORT=5000
  MONGO_URI=mongodb://localhost:27017/book-reviews)
  Start the backend server
Frontend Setup
  Navigate to the "client" directory
  Install dependencies
  Start the frontend development server




Features Implemented

    List Reviews:
        Displays a list of all book reviews, including:
            Title
            Author
            Rating
            Review Text
            Date Added

    Add a Review:
        Add a new review with the following fields:
            Title
            Author
            Rating (1–5)
            Review Text

    Edit a Review:
        Modify an existing review by navigating to its edit page.

    Delete a Review:
        Remove a review from the list and the database.

    Backend API:
        GET /reviews: Fetch all reviews.
        POST /reviews: Add a new review.
        PUT /reviews/:id: Update an existing review.
        DELETE /reviews/:id: Delete a review.


Additional Notes

    Technologies Used:
        Backend: Node.js, Express, MongoDB
        Frontend: React, Axios
        Styling: Basic CSS

    Default Configuration:
        The backend connects to a local MongoDB instance by default. Update the MONGO_URI in .env for a remote database.
