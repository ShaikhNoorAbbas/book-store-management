import { useFormik } from "formik";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Add() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { values, handleChange, handleSubmit, handleReset } = useFormik({
    initialValues: {
      title: "",
      author: "",
    },
    onSubmit: submitHandler,
  });
  async function submitHandler() {
    try {
      setIsLoading(true);
      const response = await api.post("/books", values);
      console.log(response);
      navigate("/");
      console.log(values);
      handleReset();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  return (
    <>
      <h1 className="text-center my-4" style={{ color: "crimson" }}>
        Add Books
      </h1>
      <section
        className="card"
        style={{ boxShadow: "1px 1px 0.85rem crimson" }}
      >
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column gap-4 card-body"
        >
          {/* title */}
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter Book Title"
              className="form-control"
              onChange={handleChange}
              value={values.title}
            />
          </div>
          {/* author */}
          <div>
            <label htmlFor="author">Author: </label>
            <input
              type="text"
              name="author"
              id="author"
              placeholder="Enter Book author"
              className="form-control"
              onChange={handleChange}
              value={values.author}
            />
          </div>
          {/* Action Button */}
          <div>
            <button
              type="submit"
              className={`btn btn-${isLoading ? "secondary" : "primary"} w-100 `}
            >
              {isLoading ? "Adding....." : "Add Book"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
