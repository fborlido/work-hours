import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendData } from "./submitSlice";

const Submit = ({ setnotification }) => {
  const user = useSelector((state) => state.user.user);
  const month = useSelector((state) => state.month.month);
  const year = useSelector((state) => state.month.year);
  const days = useSelector((state) => state.list.days);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "no_user") {
      setnotification("Please select a user.");
      window.scrollTo(0, 0);
      return;
    } else {
      dispatch(
        sendData({
          user: user,
          month: month,
          year: year,
          days: days,
        })
      );
    }
  };

  return (
    <>
      <form action="">
        <button type="submit" className="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Submit;
