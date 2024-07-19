import React from "react";
import { useState } from "react";
import "./ReviewForm.css";
import FileInput from "./FileInput";

const INITIAL_VALUE = {
  title: "",
  calorie: 0,
  content: "",
  imgFile: null,
};

const ReviewForm = ({ initialValues = INITIAL_VALUE, onSubmitSucess, onCancel, initialPreview, onSubmit }) => {
  const [isSubmmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState();
  const [values, setValues] = useState(INITIAL_VALUE);
  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("calorie", values.calorie);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgFile);

    let result;
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      result = await onSubmit(formData);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }
    const { review } = result;
    setValues(INITIAL_VALUE);
    onSubmitSucess(review);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FileInput name="imgFile" value={values.imgFile} onChange={handleChange} initialPreview={initialPreview} />
      <input type="text" name="title" value={values.title} onChange={handleInputChange} />
      <input type="number" name="calorie" value={values.calorie} onChange={handleInputChange}></input>
      <input name="content" value={values.content} onChange={handleInputChange}></input>
      <button type="submit" disabled={isSubmmitting}>
        확인
      </button>
      {onCancel && <button onClick={onCancel}>취소</button>}
      {submittingError?.message && <div>{submittingError.message}</div>}
    </form>
  );
};

export default ReviewForm;
