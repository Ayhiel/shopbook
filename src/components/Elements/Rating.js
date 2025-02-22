export const Rating = ({ rating }) => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        index < rating ? (
          <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
        ) : (
          <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
        )
      ))}
    </>
  );
}
