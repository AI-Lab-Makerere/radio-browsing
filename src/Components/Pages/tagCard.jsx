import React from "react";

const TagCard = (props) => {
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
              <div className="" style={{ marginLeft: "10px" }}>
                <h5>{props.tag_name}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default TagCard;
