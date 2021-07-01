import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./components/Header";
import Filter from "../features/filter/Filter";
import Table from "../features/table/Table";

import { fetchData } from "../features/content/contentSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container">
        <p className="title has-text-centered mt-5">Work Hours</p>
        <Filter />
        <Table />
        <br />
      </div>
    </>
  );
};

export default App;
