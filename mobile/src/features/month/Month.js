import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { advanceMonth, backMonth } from "./monthSlice";

const Month = () => {
  const month = useSelector((state) => state.month.month);
  const year = useSelector((state) => state.month.year);

  const month_names_short = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dispatch = useDispatch();

  return (
    <>
      <div className="level is-mobile">
        <div className="level-item">
          <button
            className="button is-white"
            onClick={() => dispatch(backMonth())}
          >
            <span className="icon">
              <i className="fas fa-chevron-left"></i>
            </span>
          </button>
        </div>
        <div className="level-item">
          <span className="tag is-light is-medium">
            {month_names_short[month - 1] + " " + year}
          </span>
        </div>
        <div className="level-item">
          <button
            className="button is-white"
            onClick={() => dispatch(advanceMonth())}
          >
            <span className="icon">
              <i className="fas fa-chevron-right"></i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Month;
