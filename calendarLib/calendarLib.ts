import { weeksToDays } from "date-fns";

type Month = {
  weeks: Week[];
  selfNum: number;
  startDay: Day;
  endDay: Day;
  numOfTotalDays: number;
};

type Week = {
  days: Day[];
  selfNum: number;
};

type Day = {
  dayOfWeek: number;
  num: number;
  monthNum: number;
  isActive: boolean;
};

class CalendarController {
  constructor() {}

  getCurrentMonth(): Month {
    const today = new Date();
    return this.getMonth(today.getFullYear(), today.getMonth() + 1); // getMonth is 0-origin
  }

  // year means FullYear, monthNum is 1 origin
  getMonth(fullYear: number, monthNum: number): Month {
    // create start day
    const startDayNum = new Date(fullYear, monthNum - 1).getDate();
    const startOfDayOfWeek = new Date(fullYear, monthNum - 1).getDay();
    const startDay: Day = {
      dayOfWeek: startOfDayOfWeek,
      num: startDayNum,
      monthNum: monthNum,
      isActive: true,
    };

    // create end day
    const endDayNum = new Date(fullYear, monthNum, 0).getDate();
    const endOfDayOfWeek = new Date(fullYear, monthNum, 0).getDay();
    const endDay: Day = {
      dayOfWeek: endOfDayOfWeek,
      num: endDayNum,
      monthNum: monthNum,
      isActive: true,
    };

    const numOfTotalDays = endDayNum;

    const weeks: Week[] = [];

    // create weeks
    var weekDays: Day[] = [];
    for (var i = -startOfDayOfWeek; i < 0; i++) {
      const dayNum = new Date(fullYear, monthNum - 2, i).getDate(); // new Date に渡すのは 0 origin
      const dayOfWeek = new Date(fullYear, monthNum - 2, i).getDay(); // new Date に渡すのは 0 origin
      weekDays.push({
        dayOfWeek: dayOfWeek,
        num: dayNum,
        monthNum: (monthNum - 1) % 12, // 先月, 1-origin
        isActive: false,
      });
    }

    for (var i = startDayNum; i <= endDayNum; i++) {
      const dayNum = new Date(fullYear, monthNum - 1, i).getDate(); // new Date に渡すのは 0 origin
      const dayOfWeek = new Date(fullYear, monthNum - 1, i).getDay(); // new Date に渡すのは 0 origin
      weekDays.push({
        dayOfWeek: dayOfWeek,
        num: dayNum,
        monthNum: monthNum % 12, // 今月, 1-origin
        isActive: true,
      });

      // 切り替え
      if (dayOfWeek === 6) {
        weeks.push({
          days: weekDays,
          selfNum: weeks.length,
        });
        weekDays = [];
      }
    }

    for (var i = endOfDayOfWeek + 1; i < 7; i++) {
      const dayNum = new Date(fullYear, monthNum, i).getDate(); // new Date に渡すのは 0 origin
      const dayOfWeek = new Date(fullYear, monthNum, i).getDay(); // new Date に渡すのは 0 origin
      weekDays.push({
        dayOfWeek: dayOfWeek,
        num: dayNum,
        monthNum: (monthNum + 1) % 12, // 次の月, 1-origin
        isActive: false,
      });

      // 切り替え
      if (i === 6) {
        weeks.push({
          days: weekDays,
          selfNum: weeks.length,
        });
        weekDays = [];
      }
    }

    return {
      weeks: weeks,
      selfNum: monthNum,
      startDay: startDay,
      endDay: endDay,
      numOfTotalDays: numOfTotalDays,
    };
  }
}

const CC = new CalendarController();

export default CC;
