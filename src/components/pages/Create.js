import React, { useState } from "react";
import { Link } from "react-router-dom";

function Create(props) {
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
    setDetails((previousDeets) => {
      return { ...previousDeets, [e.target.name]: e.target.value };
    });
  };
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <form>
                <h1>🎉 Create Event!</h1>
                {/* name, title, date from to, street name, suburb, state postcode, link */}
                <input
                  type="text"
                  onChange={handleChange}
                  name="name"
                  placeholder="John Doe"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  name="title"
                  placeholder="Movie Night"
                />
                <input
                  type="datetime-local"
                  onChange={handleChange}
                  name="startDate"
                />
                <input
                  type="datetime-local"
                  onChange={handleChange}
                  name="endDate"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  name="streetName"
                  placeholder="Street name"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  name="suburb"
                  placeholder="Suburb"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  name="state"
                  placeholder="State"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  name="postcode"
                  placeholder="Postcode"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  name="link"
                  placeholder="Add Link"
                />
                <Link
                  to="/event"
                  className="form-button btn--primary"
                  type="submit"
                  onClick={()=>props.eventDetails(details)}
                >
                  Next
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Create;
