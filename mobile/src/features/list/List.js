import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setDays, increaseDay, decreaseDay } from "./listSlice";

const List = () => {
  const styles = {
    holder: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      borderRadius: "20px",
      margin: "10px 0",
    },
    bg: {},
  };

  const dispatch = useDispatch();

  const month = useSelector((state) => state.month.month);
  const year = useSelector((state) => state.month.year);

  useEffect(() => {
    dispatch(setDays({ month, year }));
  }, [month, year, dispatch]);

  const days = useSelector((state) => state.list.days);

  if (!days) {
    return <p>error</p>;
  } else {
    return (
      <>
        <div className="level is-mobile">
          <div className="level-item">
            <p>Day</p>
          </div>
          <div className="level-item">
            <p>Hours</p>
          </div>
        </div>

        {days.map((day) => (
          <div
            key={day.day}
            style={
              day.hours === 0
                ? { ...styles.holder, backgroundColor: "#cccccc" }
                : { ...styles.holder, backgroundColor: "#fff2ab" }
            }
          >
            <div>{day.day}</div>
            <div
              className="field-has-addons"
              style={{ display: "flex", alignItems: "center" }}
            >
              <button
                className="button is-small is-text"
                style={{ textDecoration: "none" }}
                onClick={() => dispatch(decreaseDay(day.day))}
              >
                <span className="icon">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </button>
              <p className="tag is-white is-size-6">{day.hours}</p>
              <button
                className="button is-small is-text"
                style={{ textDecoration: "none" }}
                onClick={() => dispatch(increaseDay(day.day))}
              >
                <span className="icon">
                  <i className="fas fa-chevron-up"></i>
                </span>
              </button>
            </div>
          </div>
        ))}
      </>
    );
  }
};

export default List;
