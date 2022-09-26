import React from "react";
import { Link } from "react-router-dom";
import HeroImg from '../images/hero-img.png';
import './LandingPage.css'

function LandingPage() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row flex-column flex-md-row">
            <div className="col-md-6 col">
              <div className="hero-img">
                <img src={HeroImg} alt="movie night event create by Elysia. The event includes a date, location and a link" />
              </div>
            </div>
            <div className="col-md-6 col">
              <div className="hero-main">
                <h1 className="hero-main__title">Imagine if <span className="text--primary">Snapchat</span> had events.</h1>
                <p className="hero-main__paragraph">Easily host and share events with your friends across any social media.</p>
                <Link
                  to="/create"
                  className="btn btn--primary"
                >
                  🎉 Create my event
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
