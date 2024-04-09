import React from 'react'

export default function Skills() {
  return (
    <div>
      <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              I bring websites and applications to life with proficiency in front-end development, back-end engineering, and database management. My passion lies in building interactive and data-driven experiences.
            </p>
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '100%' }} // Set width directly
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  CSS <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '80%' }} // Set width directly
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '60%' }} // Set width directly
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  React <i className="val">50%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '50%' }} // Set width directly
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  NodeJS <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '60%' }} // Set width directly
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Jquery <i className="val">55%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={55}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '55%' }} // Set width directly
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  PostgrSQL <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '60%' }} // Set width directly
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  ExpressJs <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '60%' }} // Set width directly
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Bootstrap <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '80%' }} // Set width directly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}