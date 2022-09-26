import React from "react";
import EventImg from '../../images/event-img.png'
import '../../App.css'

function Event({ response }) {
  return (
    <>
      <section className="event-section">
        <div className="container">
          <div className="row flex-column flex-md-row">
            <div className="col-md-6 col">
              <div className="event-details">
                <h2>{response.title}</h2>
                <p>Hosted by {response.name}</p>
                <div className="event-details__date-location">
                  <div className="event-details__date-location__date">
                    <i className="fal fa-calendar-alt"></i>
                    <div>
                      <p>{Date(response.startDate)}</p>
                      <p>To {Date(response.endDate)}</p>
                    </div>
                  </div>
                  <div className="event-details__date-location__location">
                    <i className="fal fa-map-marker-alt"></i>
                    <div>
                      <p>{response.streetName}</p>
                      <p>{response.suburb}, {response.state}, {response.postcode}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col">
              <div>
                <img src={EventImg} alt="displayed is a cake with confetti"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Event;
