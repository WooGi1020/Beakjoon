import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";

const FileInput = ({ name, value, onChange, initialPreview }) => {
  const [preview, setPreview] = useState(initialPreview);
  const inputRef = useRef();
  const handleChange = (e) => {
    const nextvalue = e.target.files[0];
    onChange(name, nextvalue);
  };
  useEffect(() => {
    if (inputRef.current) {
      console.log(inputRef);
    }
  }, []);
  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview(initialPreview);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value, initialPreview]);

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = "";
    onChange(name, null);
  };
  return (
    <div>
      <img src={preview} accept="image/png, image/jpg" alt="이미지 미리보기" />
      <input type="file" onChange={handleChange} ref={inputRef}></input>
      {value && <button onClick={handleClearClick}>초기화</button>}
    </div>
  );
};

export default FileInput;
