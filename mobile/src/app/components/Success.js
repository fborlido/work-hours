import React from "react";
import { useDispatch } from "react-redux";

import { idle } from "../../features/submit/submitSlice";

const Success = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="level is-mobile">
        <div className="level-item">
          <span className="tag is-success is-large is-rounded mt-6">
            <span className="icon">
              <i className="fas fa-check"></i>
            </span>
          </span>
        </div>
      </div>
      <p className="title is-5 has-text-centered">Success!</p>
      <button className="button" onClick={() => dispatch(idle())}>
        Back
      </button>
    </>
  );
};

export default Success;
