import React, { useState } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import User from "../features/user/User";
import Month from "../features/month/Month";
import List from "../features/list/List";
import Submit from "../features/submit/Submit";
import Loading from "./components/Loading";
import Success from "./components/Success";
import Error from "./components/Error";

const App = () => {
  const status = useSelector((state) => state.submit.status);
  const [notification, setnotification] = useState(null);
  return (
    <>
      <Header />
      <div className="container is-fluid mt-5">
        <p className="title has-text-centered">Work Hours</p>
        <Error msg={notification} setnotification={setnotification} />
        {status === "idle" ? (
          <>
            <User />
            <br />
            <Month />
            <List />
            <br />
            <Submit setnotification={setnotification} />
            <br />
          </>
        ) : status === "waiting" ? (
          <Loading />
        ) : (
          <Success />
        )}
      </div>
    </>
  );
};

export default App;
