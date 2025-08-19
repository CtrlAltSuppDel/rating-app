import { useState } from "react";
import Star from "./Star";
const Rating = ({ heading = "Rate your experience", color = "gold" }) => {
  const stars = Array.from({ length: 5 }, (_, id) => id + 1);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"];
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
    </div>
  );
};

export default Rating;
