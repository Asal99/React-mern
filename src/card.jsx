import "./App.css";

export const Card = ({
  image,
  title,
  description,
  duration,
  lessons,
  author,
  rating,
  tag,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      {tag && <div className="card-tag">{tag}</div>}

      <h2 className="card-title">{title}</h2>

      <p className="card-description">{description}</p>

      <div className="card-info">
        <span>{duration}</span>
        <span>{lessons} lessons</span>
      </div>

      <div className="card-author-rating">
        <span className="card-author">{author}</span>
        <div className="card-rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 20 20"
              fill="currentColor"
              className={i < rating ? "filled" : "empty"}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.067 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
            </svg>
          ))}
          <span style={{ fontSize: "12px", color: "#6b7280" }}>{rating}.0</span>
        </div>
      </div>

      <button className="card-button">Start Course</button>
    </div>
  );
};
