import React, { useState } from "react";
import styles from "../styles/Calendar.module.css";
import ccobj from "../calendarLib/calendarLib"; // calendar controller object
import { CheckCircle } from "react-bootstrap-icons";

function CalendarPage() {
  const month = ccobj.getCurrentMonth();
  const weeksElements = [];

  for (const week of month.weeks) {
    const dayElements = [];
    for (const day of week.days) {
      dayElements.push(
        <div
          className={`col ${styles.calendarDay} ${
            !day.isActive
              ? styles.calendarDayNoCurrentMonth
              : styles.calendarDay
          } ${day.dayOfWeek === 6 ? styles.calendarDayLastColChild : ""} ${
            month.weeks.length - 1 === week.selfNum
              ? styles.calendarDayLastRowChild
              : ""
          }`}
        >
          <div className="row p-0">
            <time className={`${styles.time} p-0`}>{day.num}</time>
          </div>
          <div className="row">
            <div className="p-0 m-0">▼</div>
          </div>
          <div className="row p-0 m-0">
            <CheckCircle
              className="p-0 m-0"
              size={96}
              style={{ position: "relative", top: "-4px", maxHeight: "70px" }}
            />
          </div>
        </div>
      );
    }
    const weekElement = (
      <div className={"row flex-nowrap justify-content-center"}>
        {dayElements}
      </div>
    );
    weeksElements.push(weekElement);
  }

  return (
    <>
      <h1 className={`${styles.title} text-center`}>
        {" "}
        {"2022 " + month.selfNum + "月"}
      </h1>
      <div className={styles.calendar}>
        <div className={"row flex-nowrap justify-content-center"}>
          <div className={`col ${styles.calendarDayTop}`}>
            <time dateTime={"2014-06-29"} className={`${styles.timeTop} p-0`}>
              日
            </time>
          </div>
          <div className={`col ${styles.calendarDayTop}`}>
            <time dateTime={"2014-06-30"} className={`${styles.timeTop} p-0`}>
              月
            </time>
          </div>
          <div className={`col ${styles.calendarDayTop}`}>
            <time dateTime="2014-07-01" className={`${styles.timeTop} p-0`}>
              火
            </time>
          </div>
          <div className={`col ${styles.calendarDayTop}`}>
            <time dateTime="2014-07-02" className={`${styles.timeTop} p-0`}>
              水
            </time>
          </div>
          <div className={`col ${styles.calendarDayTop}`}>
            <time dateTime="2014-07-03" className={`${styles.timeTop} p-0`}>
              木
            </time>
          </div>
          <div className={`col ${styles.calendarDayTop}`}>
            <time dateTime="2014-07-04" className={`${styles.timeTop} p-0`}>
              金
            </time>
          </div>
          <div
            className={`col ${styles.calendarDayTop} ${styles.calendarDayLastColChild}`}
          >
            <time dateTime="2014-07-05" className={`${styles.timeTop} p-0`}>
              土
            </time>
          </div>
        </div>
        {weeksElements}
      </div>
    </>
  );
}
export default CalendarPage;
