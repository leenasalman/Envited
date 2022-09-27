import React from "react";
import EventImg from "../../images/event-img.png";
import "../../App.css";

function Event({ response }) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  //start date formatting
  var startDate = new Date(response.startDate).getDate();
  var startMonth = month[new Date(response.startDate).getMonth()];
  var startHours =
    new Date(response.startDate).getHours() > 12
      ? new Date(response.startDate).getHours() % 12
      : new Date(response.startDate).getHours();
  var startMinutes = new Date(response.startDate).getMinutes() < 10 ? "0"+new Date(response.startDate).getMinutes() : new Date(response.startDate).getMinutes();;
  var isItAmOrPm_start = new Date(response.startDate).getHours() >= 12 ? "PM" : "AM";

  //end date formatting
  var endDate = new Date(response.endDate).getDate();
  var endMonth = month[new Date(response.endDate).getMonth()];
  var endHours =
    new Date(response.endDate).getHours() > 12
      ? new Date(response.endDate).getHours() % 12
      : new Date(response.endDate).getHours();
  var endMinutes = new Date(response.endDate).getMinutes() < 10 ? "0"+new Date(response.endDate).getMinutes() : new Date(response.endDate).getMinutes();
  var isItAmOrPm_end = new Date(response.endDate).getHours() >= 12 ? "PM" : "AM";
  var timeZone = new Date(response.endDate).toString().split(" ");
  return (
    <>
      <section className="event-section">
        <div className="container">
          <div className="row flex-column-reverse flex-md-row">
            <div className="col-md-6 col">
              <div className="event-details">
                <h2 className="event-details__title">{response.title}</h2>
                <p className="event-details__host">
                  Hosted by <b>{response.name}</b>
                </p>
                <div className="event-details__date-location">
                  <div className="event-details__date-location">
                    <div>
                      <i className="fal fa-calendar-alt"></i>
                      <div>
                        <p>
                          {startDate} {startMonth} {startHours}:{startMinutes}{isItAmOrPm_start}
                        </p>
                        <p>
                          to{" "}
                          <b>
                            {endDate} {endMonth} {endHours}:{endMinutes}{isItAmOrPm_end}
                          </b>
                          {" "}{timeZone[5]}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="event-details__date-location">
                    <div>
                      <i className="fal fa-map-marker-alt"></i>
                      <div>
                        <p>{response.streetName}</p>
                        <p>
                          {response.suburb}, {response.state},{" "}
                          {response.postcode}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col">
              <div>
                <img src={EventImg} alt="displayed is a cake with confetti" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Event;
