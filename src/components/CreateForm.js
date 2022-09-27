import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreateForm.css";

function CreateForm(props) {
  const [details, setDetails] = useState({
    name: "",
    title: "",
    startDate: "",
    endDate: "",
    streetName: "",
    suburb: "",
    state: "",
    postcode: "",
    link: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setDetails((previousDeets) => {
      return { ...previousDeets, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(details);
  };
  const today = new Date();
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__header">🎉 Create Event!</h1>
        {/* name, title, date from to, street name, suburb, state postcode, link */}
        <input
          className="form__input"
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="John Doe"
        />
        <input
          className="form__input"
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="Movie Night"
        />
        <input
          className="form__input"
          type="datetime-local"
          onChange={handleChange}
          name="startDate"
          min={today}
        />
        <input
          className="form__input"
          type="datetime-local"
          onChange={handleChange}
          name="endDate"
          min={today.setHours(23, 59, 59, 998)}
        />
        <input
          className="form__input"
          type="text"
          onChange={handleChange}
          name="streetName"
          placeholder="Street name"
        />
        <input
          className="form__input"
          type="text"
          onChange={handleChange}
          name="suburb"
          placeholder="Suburb"
        />
        <input
          className="form__input"
          type="text"
          onChange={handleChange}
          name="state"
          placeholder="State"
        />
        <input
          className="form__input"
          type="text"
          onChange={handleChange}
          name="postcode"
          placeholder="Postcode"
        />
        <input
          className="form__input"
          type="text"
          onChange={handleChange}
          name="link"
          placeholder="Add Link"
        />
        <Link
          to="/event"
          className="form-button btn btn--primary"
          type="submit"
          onClick={handleSubmit}
        >
          Next
        </Link>
      </form>
    </>
  );
}

export default CreateForm;
