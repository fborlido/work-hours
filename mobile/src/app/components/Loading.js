import React from "react";

const Loading = () => {
  return (
    <>
      <div className="level is-mobile">
        <div className="level-item">
          <button className="button is-primary is-rounded is-loading mb-2 mt-6"></button>
        </div>
      </div>
      <p className="title is-6 has-text-centered">Loading</p>
    </>
  );
};

export default Loading;
