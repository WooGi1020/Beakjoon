import React from "react";
import "./ReviewList.css";
import Rating from "./Rating";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function ReviewListItem({ item, onDelete }) {
  const { imgUrl, title, rating, createdAt, content } = item;
  const handleDeleteClick = () => {
    onDelete(item.id);
  };
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-Img" src={imgUrl} alt={title} />
      <div>
        <h1>{title}</h1>
        <Rating value={rating} />
        <p>{formatDate(createdAt)}</p>
        <p>{content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

const ReviewList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ReviewListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewList;
