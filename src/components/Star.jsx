const Star = ({
  star,
  rating,
  color,
  hover,
  clickListener,
  mouseEnterListener,
  mouseLeaveListener,
}) => {
  return (
    <span
      onClick={() => clickListener(star)}
      onMouseEnter={() => mouseEnterListener(star)}
      onMouseLeave={mouseLeaveListener}
      style={{
        color: star <= (hover || rating) ? color : "#ccc",
      }}
    >
      {`\u2605`}
    </span>
  );
};

export default Star;
