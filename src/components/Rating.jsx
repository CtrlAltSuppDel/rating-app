import { useState } from "react";
import Star from "./Star";
const Rating = ({ heading = "Rate your experience", color = "gold" }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const stars = Array.from({ length: 5 }, (_, id) => id + 1);
  const feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"];

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color={color}
            clickListener={setRating}
            mouseEnterListener={setHover}
            mouseLeaveListener={() => setHover(null)}
          />
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
      <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </button>

      {/* Modal */}
      {submitted && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Thank You ! </h2>
            <p>
              You rated us {rating} star{rating > 1 && "s"}
            </p>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rating;
