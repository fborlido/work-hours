import React from "react";

const Error = ({ msg, setnotification }) => {
  return (
    <>
      {msg ? (
        <div className="notification is-danger">
          <button
            className="delete"
            onClick={() => setnotification(null)}
          ></button>
          {msg}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Error;
