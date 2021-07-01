import React from "react";
import { useSelector } from "react-redux";

import ByUser from "./ByUser";
import ByMonth from "./ByMonth";
//import ByYear from "./ByYear";

const Table = () => {
  const data = useSelector((state) => state.content.data);
  // const users = useSelector((state) => state.content.users);
  // const months = useSelector((state) => state.content.months);
  // const years = useSelector((state) => state.content.years);

  const filter = useSelector((state) => state.filter.filter);
  const selected = useSelector((state) => state.filter.selected);

  const days = [...Array(31).keys()];

  if (data === []) {
    return <p>No data</p>;
  } else if (filter === "user" && selected) {
    const dataByUser = [];

    data.map((entry) => {
      if (entry.user === selected) {
        dataByUser.push(entry);
      }
    });
    return <ByUser days={days} data={dataByUser} />;
  } else if (filter === "month" && selected) {
    const dataByMonth = [];

    data.map((entry) => {
      if (entry.month + "," + entry.year === selected) {
        dataByMonth.push(entry);
      }
    });
    return <ByMonth days={days} data={dataByMonth} />;
    // } else if (filter === "year" && selected) {
    //   const dataByYear = [];

    //   data.map((entry) => {
    //     if (entry.year === selected) {
    //       dataByYear.push(entry);
    //     }
    //   });
    //   return <ByYear days={days} data={dataByYear} />;
  } else {
    return <p>Select Data</p>;
  }
};

export default Table;
