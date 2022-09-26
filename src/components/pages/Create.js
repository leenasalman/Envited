import React from "react";
import { useNavigate } from "react-router-dom";
import CreateForm from "../CreateForm";

function Create(props) {
  const navigate = useNavigate();
const getData = (details) => {
  props.setResponse(details);
  navigate('/event');
}
  return (
    <>
      <section className='form-section'>
        <div className="container">
          <div className="row">
            <div className="col">
              <CreateForm onSubmit={getData}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Create;
