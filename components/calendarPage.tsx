import React from "react";
import styles from "../styles/Calendar.module.css";

function CalendarPage() {
  return (
    <>
      <h1 className={`${styles.title} text-center`}> 2022 11 月</h1>
      <div className={styles.calendar}>
        <div className={"row flex-nowrap justify-content-center"}>
          <div className={`col ${styles.calendarDayTop}`}>
            <time dateTime={"2014-06-29"} className={styles.timeTop}>
              日
            </time>
          </div>
          <div className={`col ${styles.calendarDayTop}`}>
            <time dateTime={"2014-06-30"} className={styles.timeTop}>
              月
            </time>
          </div>
          <div className={`col ${styles.calendarDayTop}`}>
            <time dateTime="2014-07-01" className={styles.timeTop}>
              火
            </time>
          </div>
          <div className={`col ${styles.calendarDayTop}`}>
            <time dateTime="2014-07-02" className={styles.timeTop}>
              水
            </time>
          </div>
          <div className={`col ${styles.calendarDayTop}`}>
            <time dateTime="2014-07-03" className={styles.timeTop}>
              木
            </time>
          </div>
          <div className={`col ${styles.calendarDayTop}`}>
            <time dateTime="2014-07-04" className={styles.timeTop}>
              金
            </time>
          </div>
          <div
            className={`col ${styles.calendarDayTop} ${styles.calendarDayLastColChild}`}
          >
            <time dateTime="2014-07-05" className={styles.timeTop}>
              土
            </time>
          </div>
        </div>

        <div className={"row flex-nowrap justify-content-center"}>
          <div
            className={`col ${styles.calendarDay} ${styles.calendarDayNoCurrentMonth}`}
          >
            <time dateTime={"2014-06-29"} className={styles.time}>
              29
            </time>
          </div>
          <div
            className={`col ${styles.calendarDay} ${styles.calendarDayNoCurrentMonth}`}
          >
            <time dateTime={"2014-06-30"} className={styles.time}>
              30
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-01" className={styles.time}>
              01
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-02" className={styles.time}>
              02
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-03" className={styles.time}>
              03
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-04" className={styles.time}>
              04
            </time>
          </div>
          <div
            className={`col ${styles.calendarDay} ${styles.calendarDayLastColChild}`}
          >
            <time dateTime="2014-07-05" className={styles.time}>
              05
            </time>
          </div>
        </div>
        <div className="row flex-nowrap justify-content-center">
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-06" className={styles.time}>
              06
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-07" className={styles.time}>
              07
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-08" className={styles.time}>
              08
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-09" className={styles.time}>
              09
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-10" className={styles.time}>
              10
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-11" className={styles.time}>
              11
            </time>
          </div>
          <div
            className={`col ${styles.calendarDay} ${styles.calendarDayLastColChild}`}
          >
            <time dateTime="2014-07-12" className={styles.time}>
              12
            </time>
          </div>
        </div>
        <div className="row flex-nowrap justify-content-center">
          <div className={`col ${styles.calendarDay} `}>
            <time dateTime="2014-07-13" className={styles.time}>
              13
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-14" className={styles.time}>
              14
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-15" className={styles.time}>
              15
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-16" className={styles.time}>
              16
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-17" className={styles.time}>
              17
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-18" className={styles.time}>
              18
            </time>
          </div>
          <div
            className={`col ${styles.calendarDay} ${styles.calendarDayLastColChild}`}
          >
            <time dateTime="2014-07-19" className={styles.time}>
              19
            </time>
          </div>
        </div>
        <div className="row flex-nowrap justify-content-center">
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-20" className={styles.time}>
              20
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-21" className={styles.time}>
              21
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-22" className={styles.time}>
              22
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-23" className={styles.time}>
              23
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-24" className={styles.time}>
              24
            </time>
          </div>
          <div className={`col ${styles.calendarDay}`}>
            <time dateTime="2014-07-25" className={styles.time}>
              25
            </time>
          </div>
          <div
            className={`col ${styles.calendarDay} ${styles.calendarDayLastColChild}`}
          >
            <time dateTime="2014-07-26" className={styles.time}>
              26
            </time>
          </div>
        </div>
        <div className="row flex-nowrap">
          <div
            className={`col ${styles.calendarDay} ${styles.calendarDayLastRowChild}`}
          >
            <time dateTime="2014-07-27" className={styles.time}>
              27
            </time>
          </div>
          <div
            className={`col ${styles.calendarDay} ${styles.calendarDayLastRowChild}`}
          >
            <time dateTime="2014-07-28" className={styles.time}>
              28
            </time>
          </div>
          <div
            className={`col ${styles.calendarDay} ${styles.calendarDayLastRowChild}`}
          >
            <time dateTime="2014-07-29" className={styles.time}>
              29
            </time>
          </div>
          <div
            className={`col ${styles.calendarDay} ${styles.calendarDayLastRowChild}`}
          >
            <time dateTime="2014-07-30" className={styles.time}>
              30
            </time>
          </div>
          <div
            className={`col ${styles.calendarDay} ${styles.calendarDayLastRowChild}`}
          >
            <time dateTime="2014-07-31" className={styles.time}>
              31
            </time>
          </div>
          <div
            className={`col ${styles.calendarDay} ${styles.calendarDayNoCurrentMonth} ${styles.calendarDayLastRowChild}`}
          >
            <time dateTime="2014-08-01" className={styles.time}>
              01
            </time>
          </div>
          <div
            className={`col ${styles.calendarDay} ${styles.calendarDayNoCurrentMonth} ${styles.calendarDayLastRowChild} ${styles.calendarDayLastColChild}`}
          >
            <time dateTime="2014-08-02" className={styles.time}>
              02
            </time>
          </div>
        </div>
      </div>
    </>
  );
}
export default CalendarPage;
