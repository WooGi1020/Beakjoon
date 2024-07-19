import React, { useState } from "react";
import "./FoodList.css";
import ReviewForm from "./ReviewForm";

function FoodListItem({ item, onDelete, onEdit }) {
  const { imgUrl, title, calorie, content, imgFile } = item;
  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  const handleEditClick = () => {
    onEdit(item.id);
  };

  return (
    <div className="FoodListItem">
      <img className="FoodListItem-Img" src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
      <button onClick={handleDeleteClick}>삭제</button>
      <button onClick={handleEditClick}>수정</button>
    </div>
  );
}

function FoodList({ items, onDelete, onUpdate, onUpdateSuccess }) {
  const [editingId, setEditingId] = useState(null);

  const handleCancel = () => setEditingId(null);

  return (
    <ul>
      {items.map((item) => {
        if (item.id === editingId) {
          const { id, imgUrl, title, rating, content } = item;
          const initialValues = { imgFile: null, title, rating, content };

          const handleSubmit = (formData) => {
            onUpdate(id, formData);
          };

          const handleSubmitSuccess = (review) => {
            onUpdateSuccess(review);
            setEditingId(null);
          };

          return (
            <li key={item.id}>
              <ReviewForm
                initialValues={initialValues}
                onCancel={handleCancel}
                initialPreview={imgUrl}
                onSubmit={handleSubmit}
                onSubmitSucess={handleSubmitSuccess}
              />
            </li>
          );
        }
        return (
          <li key={item.id}>
            <FoodListItem item={item} onDelete={onDelete} onEdit={setEditingId} />
          </li>
        );
      })}
    </ul>
  );
}

export default FoodList;
