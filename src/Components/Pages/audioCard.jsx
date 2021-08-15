import React from "react";

const AudioCard = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div
            className="single-music-chart d-flex align-items-center justify-content-between wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="music-content d-flex align-items-center row">
              <div className="sl-number">
                <h5>{props.number}</h5>
              </div>
              <div className="audio-player">
                <audio preload="auto" controls>
                  <source src={props.audio_name} />
                </audio>
              </div>
              <div className="music-title" style={{ marginLeft: "10px" }}>
                <h5>{props.audio_name}</h5>
              </div>
            </div>
            <div className="music-price row">
              <a
                href="#"
                className="btn razo-btn btn-2"
                style={{ marginRight: "10px" }}
              >
                Add Tag
              </a>
              <a
                href="#"
                className="btn razo-btn btn-2"
                data-toggle="modal"
                data-target="#searchModal"
              >
                Comment
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="searchModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 style={{ color: "black" }}>Comment</h2>
              <button
                type="button"
                className="btn close-btn"
                data-dismiss="modal"
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="col-lg-12 mt-5 mt-lg-0">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control col-10"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
