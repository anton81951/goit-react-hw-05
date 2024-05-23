const MovieReviews = ({ reviews }) => {
    return (
      <div>
        <h2>Reviews</h2>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MovieReviews;