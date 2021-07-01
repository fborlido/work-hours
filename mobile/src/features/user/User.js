import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeUser } from "./userSlice";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleUserChange = (e) => {
    let select = e.target.value;
    dispatch(changeUser(select));
  };

  return (
    <>
      <div className="control">
        <div className="select is-fullwidth" id="select">
          <select value={user} onChange={handleUserChange}>
            <option value={"no_user"}>Select User</option>
            <option value="user_1">User 1</option>
            <option value="user_2">User 2</option>
            <option value="user_3">User 3</option>
            <option value="user_4">User 4</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default User;
