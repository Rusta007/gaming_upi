import React, { useEffect, useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { useField, useFormikContext } from "formik";

const FileUpload = ({ name, label, key }) => {
  const { setFieldValue, values, resetForm } = useFormikContext();
  const [previews, setPreviews] = useState([]);

  const [field, meta] = useField(name);
  console.warn(field);
  // console.log(meta.error);
  const fileInputRef = useRef(null);

  const onDrop = (acceptedFiles, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      return;
    }

    const newPreviews = acceptedFiles.map((file) => URL.createObjectURL(file));
    setFieldValue(
      name,
      values[name] ? [...values[name], ...acceptedFiles] : acceptedFiles.slice(0, 5)
    );
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews.slice(0, 5)]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
    maxFiles: 5
  });

  useEffect(() => {
    if (resetForm) {
      clearFileInput();
    }
  }, [resetForm]);

  const handleRemove = (index) => {
    const updatedPreviews = [...previews];
    updatedPreviews.splice(index, 1);
    setPreviews(updatedPreviews);

    const updatedFiles = [...values[name]];
    updatedFiles.splice(index, 1);
    setFieldValue(name, updatedFiles);
  };

  const clearFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setPreviews([]);
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-[#4c4b59]">{label}</label>
      <div
        {...getRootProps()}
        className={`border-[1px] h-[140px] rounded-md p-[10px] text-center cursor-pointer ${
          meta.error && meta.touched ? "border-red-500" : "border-[#428777]"
        }`}>
        <input {...getInputProps()} ref={fileInputRef} />
        {previews.map((preview, index) => (
          <div key={index} className="relative">
            <span
              className="absolute top-0 right-0 cursor-pointer p-1 text-white bg-red-500 rounded-full"
              onClick={() => handleRemove(index)}>
              &times;
            </span>
            <img src={preview} alt={`Preview ${index + 1}`} className="mt-4 max-h-32 mx-auto" />
          </div>
        ))}
        {previews.length === 0 && (
          <p className="text-gray-500 text-left">Drag & drop or click to select an image</p>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
