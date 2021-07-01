import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, changeSelected } from "./filterSlice";

const Filter = () => {
  const filter = useSelector((state) => state.filter.filter);
  const selected = useSelector((state) => state.filter.selected);

  const dispatch = useDispatch();

  const users = useSelector((state) => state.content.users);
  const months = useSelector((state) => state.content.months);
  //const years = useSelector((state) => state.content.years);

  return (
    <>
      <div className="level">
        <div className="level-item">
          <div class="buttons mt-2">
            <button
              class={filter === "user" ? "button is-warning" : "button"}
              style={{ width: "150px" }}
              onClick={() => dispatch(changeFilter("user"))}
            >
              Select User
            </button>
            <button
              class={filter === "month" ? "button is-warning" : "button"}
              style={{ width: "150px" }}
              onClick={() => dispatch(changeFilter("month"))}
            >
              Select Month
            </button>
            {/* <button
              class={filter === "all" ? "button is-primary" : "button"}
              style={{ width: "150px" }}
              onClick={() => dispatch(changeFilter("all"))}
            >
              Select Year
            </button> */}
          </div>
        </div>
      </div>

      <div className="level">
        <div className="level-item">
          {filter === "user" ? (
            <div className="field">
              <div className="control">
                <div class="select">
                  <select
                    value={selected}
                    onChange={(e) => dispatch(changeSelected(e.target.value))}
                  >
                    <option>Select User</option>
                    {users.map((user) => (
                      <option value={user}>{user}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ) : filter === "month" ? (
            <div className="field">
              <div className="control">
                <div class="select">
                  <select
                    value={selected}
                    onChange={(e) => dispatch(changeSelected(e.target.value))}
                  >
                    <option>Select Month</option>
                    {months.map((month) => (
                      <option value={month.month + "," + month.year}>
                        {month.month + "," + month.year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ) : (
            // <div className="field is-horizontal">
            //   <div className="field-label is-normal">
            //     <label className="label"></label>
            //   </div>
            //   <div className="field-body">
            //     <div className="field">
            //       <div className="control">
            //         <div class="select">
            //           <select
            //             value={selected}
            //             onChange={(e) =>
            //               dispatch(changeSelected(e.target.value))
            //             }
            //           >
            //             <option>Select Year</option>
            //             {years.map((year) => (
            //               <option value={year}>{year}</option>
            //             ))}
            //           </select>
            //         </div>
            //       </div>
            //     </div>
            //     <div className="field">
            //       <div className="control">
            //         <div class="select">
            //           <select
            //             value={selected}
            //             onChange={(e) =>
            //               dispatch(changeSelected(e.target.value))
            //             }
            //           >
            //             <option>Select User</option>
            //             {users.map((user) => (
            //               <option value={user}>{user}</option>
            //             ))}
            //           </select>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>
            <p>no</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Filter;
